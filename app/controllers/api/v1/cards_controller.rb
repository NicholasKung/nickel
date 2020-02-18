require "#{Rails.root}/app/services/twilio_client.rb"

class Api::V1::CardsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :show, :create, :update, :destroy]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    user_cards = current_user.cards
    render json: user_cards
  end

  def show
    render json: Card.find(params["id"])
  end

  def create
    card = Card.new(card_params)
    card.user = current_user
    if card.save
      TwilioClient.new.send_text(current_user, "You have successfully created a new card")
      render json: { card: card }
    else
      render json: { error: card.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    card = Card.find(params[:id])
    card.update_attributes(card_params)
    TwilioClient.new.send_text(current_user, "You have successfully edited a card")
    render json: card
  end


  def destroy
    card = Card.find(params[:id])

    if current_user == card.user
      card.destroy
      TwilioClient.new.send_text(current_user, "You have successfully deleted a card")
      render json: { message: "Delete Successful." }
    else
      render json: { message: "Could not delete." }
    end
  end

  private

  def card_params
    params.permit(:number, :limit, :fee, :name, :description, :date, :supplier, :image)
  end
end

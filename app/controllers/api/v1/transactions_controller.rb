class Api::V1::TransactionsController < ApplicationController
    before_action :authenticate_user!, only: [:index, :show]
    protect_from_forgery unless: -> { request.format.json? }

    def index
      render json: Transaction.all
    end

end

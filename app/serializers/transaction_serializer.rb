class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :amount, :category, :name, :user_id, :card_id, :created_at, :transaction_time
  belongs_to :card

  def transaction_time
    "#{object.created_at.strftime("%B %d, %Y")}"
  end
end

class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :card

  validates :name, presence: true, length: { maximum: 15 }
  validates :amount, numericality: true
  validates :category, presence: true
end

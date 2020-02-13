class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :card

  validates :name, presence: true
  validates :amount, numericality: true
  validates :category, presence: true
end

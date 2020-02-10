class Card < ApplicationRecord
  belongs_to :user

  validates :number, length: { is: 4 }
  validates :limit, numericality:true
  validates :fee, numericality:true

  validates :name, presence:true
  validates :description, presence:true
  validates :date, presence:true
  validates :supplier, presence:true


end

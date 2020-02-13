class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :cards
  has_many :transactions

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :encrypted_password, presence: true, length: { minimum: 6 }


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

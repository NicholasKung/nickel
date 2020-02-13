class CardSerializer < ActiveModel::Serializer
  attributes :id, :number, :limit, :fee, :name, :description, :date, :supplier, :image, :user, :full_name

  belongs_to :user
  has_many :transactions

  def full_name
    "#{object.user.first_name} #{object.user.last_name}"
  end
end

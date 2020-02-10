require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name {'Nick'}
    last_name {'Kung'}
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end

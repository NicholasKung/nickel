require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name {'Nick'}
    last_name {'Kung'}
    phone {'9148197129'}
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end

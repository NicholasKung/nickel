require 'spec_helper'
require 'rails_helper'

describe User do
  it {should have_many :cards }

  it { should have_valid(:email).when("nick@nick.com") }
  it { should_not have_valid(:email).when(nil, "", "nick@", "nick", "nick.com") }

  it { should have_valid(:encrypted_password).when("password", "123456", "I am long enough") }
  it { should_not have_valid(:encrypted_password).when(nil, "", "short") }

  it { should have_valid(:first_name).when("Nick") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:last_name).when("Kung") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should have_valid(:phone).when("19148197129") }
  it { should_not have_valid(:phone).when(nil, "") }
end

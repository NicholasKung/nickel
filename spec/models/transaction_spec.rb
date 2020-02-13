require 'spec_helper'
require 'rails_helper'

describe Transaction do
  it { should belong_to :user}
  it { should belong_to :card}

  it {should have_valid(:name).when("Anything") }
  it {should_not have_valid(:name).when(nil, "") }

  it {should have_valid(:amount).when(100) }
  it {should_not have_valid(:amount).when(nil, "", "Hi") }

  it {should have_valid(:category).when("Anything") }
  it {should_not have_valid(:category).when(nil, "") }
end

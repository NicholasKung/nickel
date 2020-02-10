require 'spec_helper'
require 'rails_helper'

describe Card do

  it { should belong_to :user }

  it { should have_valid(:number).when("1224") }
  it { should_not have_valid(:number).when(nil, "") }

  it { should have_valid(:limit).when(1234) }
  it { should_not have_valid(:limit).when(nil, "") }

  it { should have_valid(:fee).when(150) }
  it { should_not have_valid(:fee).when(nil, "") }

  it { should have_valid(:name).when("Test name") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:description).when("Test Description") }
  it { should_not have_valid(:description).when(nil, "") }

  it { should have_valid(:date).when("Test Date") }
  it { should_not have_valid(:date).when(nil, "") }

  it { should have_valid(:supplier).when("Test supplier") }
  it { should_not have_valid(:supplier).when(nil, "") }


end

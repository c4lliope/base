require "rails_helper"

describe "db/seeds.rb" do
  it "deletes existing records" do
    create(:user, handle: "olduser")

    load("db/seeds.rb")

    expect(User.where(handle: "olduser")).to be_empty
  end

  it "creates records" do
    load("db/seeds.rb")

    expect(User.count).to eq(1)
    expect(Block.count).to eq(4)
  end
end

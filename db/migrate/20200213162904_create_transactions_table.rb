class CreateTransactionsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :name, null:false
      t.integer :amount, null:false
      t.string :category, null:false

      t.belongs_to :user, null:false
      t.belongs_to :card, null:false

      t.timestamps
    end
  end
end

class CreateCardsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :number, null: false
      t.integer :limit, null: false
      t.integer :fee, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.string :date, null: false
      t.string :supplier, null: false
      t.string :image

      t.belongs_to :user, null:false

      t.timestamps
    end
  end
end

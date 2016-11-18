class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|
      t.decimal :lon
      t.decimal :lat
      t.text :explain
      t.string :link

      t.timestamps
    end
  end
end

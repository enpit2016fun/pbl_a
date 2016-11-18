class CreateFeelings < ActiveRecord::Migration[5.0]
  def change
    create_table :feelings do |t|
      t.integer :memid
      t.integer :spotid
      t.string :emotion
      t.text :comment

      t.timestamps
    end
  end
end

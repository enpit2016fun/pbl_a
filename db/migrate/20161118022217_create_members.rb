class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.string :nickname
      t.string :gender
      t.integer :age

      t.timestamps
    end
  end
end

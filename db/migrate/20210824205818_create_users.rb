class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :last_name
      t.integer :age
      t.string :phone
      t.string :email
      t.string :dob
      t.string :address

      t.timestamps
    end
  end
end

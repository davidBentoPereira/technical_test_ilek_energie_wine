class CreateWines < ActiveRecord::Migration[7.0]
  def change
    create_table :wines do |t|
      t.string :name
      t.string :price
      t.string :description

      t.timestamps
    end
  end
end

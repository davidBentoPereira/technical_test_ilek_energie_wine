class EditWinePrice < ActiveRecord::Migration[7.0]
  def change
    change_column(:wines, :price, :integer, using: 'price::integer')
  end
end

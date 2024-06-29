class CreateTastingNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :tasting_notes do |t|
      t.references :user, null: false, foreign_key: true
      t.references :wine, null: false, foreign_key: true
      t.float :review

      t.timestamps
    end
  end
end

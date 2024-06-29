class Wine < ApplicationRecord
  has_many :tasting_notes
  has_many :users, through: :tasting_notes
end

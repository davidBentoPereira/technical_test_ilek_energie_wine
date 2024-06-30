class Wine < ApplicationRecord
  has_many :tasting_notes
  has_many :users, through: :tasting_notes

  def average_review
    return nil if tasting_notes.empty?

    reviews = tasting_notes.map(&:review)
    reviews.sum / reviews.size
  end
end

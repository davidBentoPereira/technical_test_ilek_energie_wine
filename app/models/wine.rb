class Wine < ApplicationRecord
  has_many :tasting_notes
  has_many :users, through: :tasting_notes

  # TODO: Improve perfs by using SQL request rather than ruby code
  def average_review
    return nil if tasting_notes.empty?

    reviews = tasting_notes.map(&:review)
    reviews.sum / reviews.size
  end
end

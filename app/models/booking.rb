class Booking < ApplicationRecord

  validates :cargo_name, presence: true, uniqueness: { scope: :start }
  validates :start, presence: true
  validates :duration, presence: true

  before_create do
    self.end = start + duration.minutes unless duration.blank?
  end
end

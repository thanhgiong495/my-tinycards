class Lesson < ApplicationRecord
  belongs_to :deck

  has_many :cards, dependent: :destroy
end

class Api::V1::LessonSerializer < ActiveModel::Serializer
	attributes :id
  has_many :cards, serializer: Api::V1::CardSerializer
end

class Comment < ApplicationRecord
  has_many :users, :through => :videos
end

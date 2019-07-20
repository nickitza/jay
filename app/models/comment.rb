class Comment < ApplicationRecord
  has_one :users, :through => :videos
end

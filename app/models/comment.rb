class Comment < ApplicationRecord
  belongs_to :videos
  belongs_to :user 
end

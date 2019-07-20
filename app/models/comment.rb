class Comment < ApplicationRecord
<<<<<<< HEAD
  has_one :users, :through => :videos
=======
  belongs_to :videos
  belongs_to :user 
>>>>>>> 1e2239fe9574ac41b013017f210a6459adfeb753
end

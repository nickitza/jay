class Comment < ApplicationRecord
<<<<<<< HEAD
<<<<<<< HEAD
  has_one :users, :through => :videos
=======
  belongs_to :videos
  belongs_to :user 
>>>>>>> 1e2239fe9574ac41b013017f210a6459adfeb753
=======
  belongs_to :videos
  belongs_to :user 
>>>>>>> 5415362e0134f5caf36b531e10e29b48fd2551ce
end

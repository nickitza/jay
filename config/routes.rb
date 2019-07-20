Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
<<<<<<< HEAD

  namespace :api do
    resources :videos
  end

  resources :video do 
    resources :comments
  end


=======
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do

    resources :videos

    resources :videos do
      resources :comments
    end

  end
>>>>>>> 9af00fedfab6d35a522496e3bef7743a89daf61e
end

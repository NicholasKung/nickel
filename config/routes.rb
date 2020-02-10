Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: 'homes#index'
  get "/creditcards", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :cards, only: [:index] do
      end
    end
  end
end

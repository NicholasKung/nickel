Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: 'homes#index'
  get "/cards", to: 'homes#index'
  get "/cards/new", to: 'homes#index'
  get "/cards/:id", to: 'homes#index'


  namespace :api do
    namespace :v1 do
      resources :cards, only: [:index, :show, :create, :destroy] do
      end
    end
  end
end

Bundled::Application.routes.draw do
  resources :subscriptions
  root 'subscriptions#index'
  
end

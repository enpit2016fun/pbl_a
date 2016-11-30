Rails.application.routes.draw do
  root to: 'home#index'

  get 'joy' => 'search#joy'
  get 'anticipacion' => 'search#anticipacion'
  get 'trust' => 'search#trust'
  get 'fear' => 'search#fear'
  get 'surprize' => 'search#surprize'
  get 'sadness' => 'search#sadness'
  get 'disugust' => 'search#disugust'
  get 'anger' => 'search#anger'
  get 'search' => 'search#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
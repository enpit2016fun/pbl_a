Rails.application.routes.draw do
  root to: 'home#index'

  get 'joy' => 'search#joy'
  get 'anticipacion' => 'search#anticipacion'
  get 'trust' => 'search#trust'
  get 'fear' => 'search#fear'
  get 'surprise' => 'search#surprise'
  get 'sadness' => 'search#sadness'
  get 'disgust' => 'search#disgust'
  get 'anger' => 'search#anger'
  get 'search' => 'search#index'
  post 'sensations/new' => 'sensations#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do

  get 'post/fetchall'
  get 'post/getpost/:id', to: 'post#getpost'
  post 'post/create', to: 'post#create'
  put 'post/update/:id', to: 'post#update'
  delete 'post/delete/:id', to: 'post#destroy'
  #root '' , to: 'post_controller#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

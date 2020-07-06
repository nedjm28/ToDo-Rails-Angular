class PostController < ApplicationController
  before_action :set_post, only: [:fetchall, :getpost, :create, :update, :destroy]
  def fetchall
    posts = Post.all
    render json: posts , status: :ok
  end

  def getpost
    post = Post.find(@id)
    if post
      render json: post, status: :ok
    else
      message = 'Dont find this post'
      render json: 'Dont find this post' , status: 404
    end

  end

  def create
    post = Post.create(post_params)
    if post.save
      render json: post, status: :ok
    else
      render json: post.errors, status: 404
    end
  end

  def update
    post = Post.find(@id)
    post.update(post_params)
    post.save
    if post
      render json: post, status: :ok
    else
      message = 'Dont find this post'
      render json: post.errors, status: 404
    end
  end

  def destroy
    post = Post.find(@id)
    if post
      post.delete
      render json: 'User was successfully destroyed.', status: :ok
    else
      render json:  post.errors, status: :not_found
    end

  end


  private
  def set_post
    if params[:id]
      @id = params[:id]
      @post2 = Post.find(@id)
    end


  end
  def post_params
    params.permit(
        :id, :title, :category
    )
  end
end

class BlogsController < ApplicationController

    def index
        blogs = Blog.all
        render json: BlogSerializer.new(blogs).to_serialized_json
    end

    def show
        blog = Blog.find_by(id: params[:id])
        render json: BlogSerializer.new(blog).to_serialized_json
    end

    def create
        blog = Blog.create(blog_params)
        render json: blog
    end

    def blog_params
        params.require(:blog).permit(:title, :img, :description, :user_id)
    end
end

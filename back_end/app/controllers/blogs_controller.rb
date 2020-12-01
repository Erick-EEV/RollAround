class BlogsController < ApplicationController

    def index
        blogs = Blog.all
        render json: BlogSerializer.new(blogs).to_serialized_json
    end

    def show
        blog = Blog.find_by(id: params[:id])
        render json: BlogSerializer.new(blog).to_serialized_json
    end
end

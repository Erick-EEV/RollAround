class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end

    def show
        comment = Comment.find_by(id: params[:id])
        render json: comment
    end 

    def create
        comment = Comment.create(commentParams)
        render json: comment
    end

    def update
        comment = Comment.update(commentParams)
        render json: comment
    end

    private
    def commentParams
        params.require(:newComment).permit(:comment, :blog_id, :user_id)
    end
end
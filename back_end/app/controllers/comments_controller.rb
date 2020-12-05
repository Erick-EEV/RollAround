class CommentsController < ApplicationController

    def create
        comment = comment.create(commentParams)
        render json: comment
    end

    private
    def commentParams
        params.require(:comments).permit(:comment)
    end
end

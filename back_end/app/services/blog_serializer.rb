class BlogSerializer 

    def initialize(blog_object)
        @blog = blog_object
    end

    def to_serialized_json
       @blog.to_json(:include => {
           :user => {:only => [:name]},
           :likes => {:only => [:num_likes]},
           :comments => {:only => [:comment]}
       })
    end 

end
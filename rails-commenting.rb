# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Below we have our controller method, BlogPosts, which is our logic center of the app, our switchboard. It coordinates the dataflow between the user, the views, and the model.
# The index method is the first step of the controller method.

class BlogPostsController < ApplicationController
  def index
    # ---2)
    # We are setting our instance variable as an active record call to call all our items from the db.

    @posts = BlogPost.all
  end

  # ---3)
  # This is the method of retrieving one peice of datum by calling .find(params[:id]) 
  # .find is the active record querie call and the [:id] is what we're passing into the params.

  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The method to display a form, in this case a new blog post, and then makes the request display markup. 
  
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # This method allows us create a route that submits user data to the db. This calls strong params which allows us to control what the user can submit. If the new post is valid the page redirect to the blog post page where the new post will be shown.

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # This is another method that typically displays a form. It will bring bring up whichever blog post based off our params and then allow us to edit. 

    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # This modifies one instance of our content. Our strong params will let us know if valid by taking us to our blog post where our newly updated post will be showing.

    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # We will be redirected to our blog page after successfully deleting our one instance of data.

      redirect_to blog_posts_path
    end
  end

  # ---9)
  # By callling on our keyword 'private', we are restricting the access to where this method can be called. Everything below our keyword is protected.

  private
  def blog_post_params
    # ---10)
    # Our two methods strong params needs which are require and permit. The require method is actually requires the attributes passed in to be present and true, in this case the blog post, while the permit method, title and content, allows certain items present but if they're not its still acceptable. 

    params.require(:blog_post).permit(:title, :content)
  end
end

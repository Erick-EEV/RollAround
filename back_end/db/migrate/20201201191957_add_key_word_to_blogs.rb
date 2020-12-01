class AddKeyWordToBlogs < ActiveRecord::Migration[6.0]
  def change
    add_column :blogs, :key_word, :string
  end
end

class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :blog_id
      t.integer :num_likes

      t.timestamps
    end
  end
end

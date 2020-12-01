class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :img
      t.text :description
      t.integer :user_id
      
      t.timestamps
    end
  end
end

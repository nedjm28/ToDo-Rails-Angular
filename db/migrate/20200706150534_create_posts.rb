class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title, :limit=>250, :null=>false
      t.string :category, :limit=>25
      t.timestamps
    end
  end
end

class CreateParagraphs < ActiveRecord::Migration[5.2]
  def change
    create_table :paragraphs do |t|
      t.string :title
      t.string :content
      t.string :photos
      t.string :live
      t.string :github
      t.references :project

      t.timestamps
    end
  end
end

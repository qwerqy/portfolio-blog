class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :display_photo
      t.string :title
      t.string :subtitle
      t.string :techstack
      t.string :short_description

      t.timestamps
    end
  end
end

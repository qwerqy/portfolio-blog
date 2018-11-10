class AddLinkToLanding < ActiveRecord::Migration[5.2]
  def change
    add_column :landings, :link, :string
  end
end

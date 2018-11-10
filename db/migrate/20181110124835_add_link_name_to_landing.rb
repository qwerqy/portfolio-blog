class AddLinkNameToLanding < ActiveRecord::Migration[5.2]
  def change
    add_column :landings, :link_name, :string
  end
end

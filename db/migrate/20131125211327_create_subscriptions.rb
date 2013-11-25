class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.string :name
      t.integer :fee
      t.boolean :monthly
      t.boolean :annually

      t.timestamps
    end
  end
end

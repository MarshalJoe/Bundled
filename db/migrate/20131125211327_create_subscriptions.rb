class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.string :name
      t.integer :fee
      t.datetime :date
      t.boolean :monthly
      t.boolean :annually

      t.timestamps
    end
  end
end

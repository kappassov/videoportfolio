class CreateSections < ActiveRecord::Migration[6.0]
  def change
    create_table :sections do |t|
      t.string :title
      t.string :description
      t.belongs_to :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end

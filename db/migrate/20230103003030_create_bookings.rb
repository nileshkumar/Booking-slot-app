class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings, id: :uuid do |t|
      t.string :cargo_name
      t.datetime :start
      t.datetime :end
      t.integer :duration

      t.timestamps
    end
  end
end

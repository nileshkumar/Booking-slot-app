class Api::V1::BookingsController < ApplicationController

  def index
    @bookings = Booking.all
    render json: @bookings, status: :ok
  end


  def create
   @booking = Booking.new(booking_params)

   if @booking.save
     render json: {data: @booking, status: 'success'}, status: :ok
   else
    render json: {data: @booking.errors.full_messages, status: 'failure'}, status: :unprocessable_entity
   end
  end


  private

  def booking_params
    params.require(:booking).permit(:cargo_name, :duration, :start)
  end
end

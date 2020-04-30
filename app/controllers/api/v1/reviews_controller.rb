class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    new_review = Review.new(review_params)
    new_review.user = current_user
    new_review.game_id = params[:game_id]

    if new_review.save
      render json: new_review
    else
      render json: { errors: new_review.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
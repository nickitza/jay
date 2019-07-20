class Api::VideosController < ApplicationController
  before_action :set_video, only: [:show, :update, :destroy ]

def index
render json: current_user.videos
end

def show
  render json: @video
end

def create
  video = current_user.videos.new(video_params)
  if video.save
    render json: video
  else
    render json: video.errors, status: 422
  end
end

## this is a custom route to display a current choice
def current
  video = Video.find(params[:id])
  video.update(current_video: !video.current_video)
  render json: video
end

def update
  if @video.update(video_params)
    render json: @video
  else
    render json: @video.errors, status: 422
  end
end

def destroy
  @video.destroy
end

private

def set_video
  @video = current_user.videos.find(params[:id])
end

def video_params
  params.require(:video).permit(:title, :duration, :genre, :description, :trailer, :user_id)
end

end

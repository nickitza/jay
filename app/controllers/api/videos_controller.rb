class Api::VideosController < ApplicationController
  before_action :set_video, only: [:show, :update, :destroy ]

def index
render json: current_user.videos
end

def show
  render json: @video
end

def create
  video = current_user.videos.new
  video.title = params[:title] ? params[:title] : video.title
  video.description = params[:description] ? params[:description] : video.description
  video.duration = params[:duration] ? params[:duration] : video.duration
  video.genre = params[:genre] ? params[:genre] : video.genre

  file = params[:file]
  if file
    begin
      ext = File.extname(file.tempfile)
      cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, resource_type: 'auto', secure: true)
      video.trailer = cloud_image["secure_url"]
    rescue => e
      render json: { errors: e }, status: 422
    end
  end

  if video.save
    render json: video
  else
    render json: video.errors, status: 422
  end
end

## this is a custom route to display a current choice
# def current
#   video = Video.find(params[:id])
#   video.update(current_video: !video.current_video)
#   render json: video
# end

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

# def video_params
#   params.require(:video).permit(:title, :duration, :genre, :description, :trailer, :user_id)
# end

end

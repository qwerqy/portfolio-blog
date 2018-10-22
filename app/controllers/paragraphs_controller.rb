class ParagraphsController < ApplicationController
  before_action :set_paragraph, only: [:show, :update, :destroy]

  # GET /paragraphs
  def index
    @paragraphs = Paragraph.all

    render json: @paragraphs
  end

  # GET /paragraphs/1
  def show
    render json: @paragraph
  end

  # POST /paragraphs
  def create
    @paragraph = Paragraph.new(paragraph_params)

    if @paragraph.save
      render json: @paragraph, status: :created, location: @paragraph
    else
      render json: @paragraph.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /paragraphs/1
  def update
    if @paragraph.update(paragraph_params)
      render json: @paragraph
    else
      render json: @paragraph.errors, status: :unprocessable_entity
    end
  end

  # DELETE /paragraphs/1
  def destroy
    @paragraph.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_paragraph
      @paragraph = Paragraph.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def paragraph_params
      params.require(:paragraph).permit(:title, :content, :photos, :live, :github)
    end
end

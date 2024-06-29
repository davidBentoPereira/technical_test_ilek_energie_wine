class TastingNotesController < ApplicationController
  before_action :set_tasting_note, only: %i[ show update destroy ]

  # GET /tasting_notes
  def index
    @tasting_notes = TastingNote.all

    render json: @tasting_notes
  end

  # GET /tasting_notes/1
  def show
    render json: @tasting_note
  end

  # POST /tasting_notes
  def create
    @tasting_note = TastingNote.new(tasting_note_params)

    if @tasting_note.save
      render json: @tasting_note, status: :created, location: @tasting_note
    else
      render json: @tasting_note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasting_notes/1
  def update
    if @tasting_note.update(tasting_note_params)
      render json: @tasting_note
    else
      render json: @tasting_note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasting_notes/1
  def destroy
    @tasting_note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tasting_note
      @tasting_note = TastingNote.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tasting_note_params
      params.require(:tasting_note).permit(:user_id, :wine_id, :review)
    end
end

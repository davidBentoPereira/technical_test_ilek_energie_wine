class WinesController < ApplicationController
  before_action :set_wine, only: %i[ show update destroy ]

  # GET /wines
  def index
    min_price = params[:min_price]
    max_price = params[:max_price]

    @wines = Wine.all

    if min_price.present? && max_price.present?
      @wines = @wines.where(price: min_price..max_price)
    elsif min_price.present?
      @wines = @wines.where("price >= ?", min_price)
    elsif max_price.present?
      @wines = @wines.where("price <= ?", max_price)
    end

    @wines = @wines.sort_by(&:average_review).reverse.as_json(methods: :average_review)

    render json: @wines
  end

  # GET /wines/1
  def show
    render json: @wine.as_json(methods: :average_review)
  end

  # POST /wines
  def create
    @wine = Wine.new(wine_params)

    if @wine.save
      render json: @wine, status: :created, location: @wine
    else
      render json: @wine.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wines/1
  def update
    if @wine.update(wine_params)
      render json: @wine
    else
      render json: @wine.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wines/1
  def destroy
    @wine.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wine
      @wine = Wine.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def wine_params
      params.require(:wine).permit(:name, :price, :description)
    end
end

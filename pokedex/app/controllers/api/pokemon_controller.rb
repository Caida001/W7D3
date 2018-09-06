class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    render :show if @pokemon
  end

  def create
    @pokemon = Pokemon.new
    if @pokemon.save
      render :show
    else
      
  end
end

class AnticipacionController < ApplicationController
  def index
    @anticipacions = Sensations.all
  end
end

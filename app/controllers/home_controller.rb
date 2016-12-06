class HomeController < ApplicationController
  def index
    @sensations = Sensation.all
  end
end

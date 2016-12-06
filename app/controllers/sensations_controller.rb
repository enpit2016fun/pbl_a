class SensationsController < ApplicationController
  def new
    data = Sensation.new({:lat => params[:lat], :lon => params[:lon], :emotion => params[:emotion]})
    data.save
  end 
end

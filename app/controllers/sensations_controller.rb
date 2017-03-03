class SensationsController < ApplicationController
  def new
    data = Sensation.new({:lat => params[:lat], :lon => params[:lon], :emotion => params[:emotion], :comment => params[:comment]})
    data.save
  end 

  def update
    data = Sensation.find(params[:id].to_i)
    data.comment = params[:comment]
    data.save
  end
end

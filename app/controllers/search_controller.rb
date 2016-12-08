class SearchController < ApplicationController
  def index
  end

  def anticipacion
    @anticipacion = Sensation.select("lon, lat, emotion").uniq.where(emotion: 1)
    gon.sensation = Sensation.select("lon, lat, emotion").uniq.where(emotion: 1)
  end

  def joy
    @joy = Sensation.select("lon, lat, emotion").uniq.where(emotion: 2)
    gon.sensation = Sensation.select("lon, lat, emotion").uniq.where(emotion: 2)
  end

  def trust
    @trust = Sensation.select("lon, lat, emotion").uniq.where(emotion: 3)
    gon.sensation = Sensation.select("lon, lat, emotion").uniq.where(emotion: 3)
  end
  
  def fear
    @fear = Sensation.select("lon, lat, emotion").uniq.where(emotion: 4)
    gon.sensation = Sensation.select("lon, lat, emotion").uniq.where(emotion: 4)
  end

  def surprise
    @surprise = Sensation.select("lon, lat, emotion").uniq.where(emotion: 5)
    gon.sensation = Sensation.select("lon, lat, emotion").uniq.where(emotion: 5)
  end

  def sadness
    @sadness = Sensation.select("lon, lat, emotion").uniq.where(emotion: 6)
    gon.sensation = Sensation.select("lon, lat, emotion").uniq.where(emotion: 6)
  end

  def disgust
    @disgust = Sensation.select("lon, lat, emotion").uniq.where(emotion: 7)
    gon.sensation = Sensation.select("lon, lat, emotion").uniq.where(emotion: 7)
  end

  def anger
    @anger = Sensation.select("lon, lat, emotion").uniq.where(emotion: 8)
    gon.sensation = Sensation.select("lon, lat, emotion").uniq.where(emotion: 8)
  end
end

class SearchController < ApplicationController
  def index
  end

  def anticipacion
    @anticipacion = Sensation.where(emotion: 1)
    gon.sensation = Sensation.where(emotion: 1)
  end

  def joy
    @joy = Sensation.where(emotion: 2)
    gon.sensation = Sensation.where(emotion: 2)
  end

  def trust
    @trust = Sensation.where(emotion: 3)
    #gon.trust = Sensation.where(emotion: 3)
    gon.sensation = Sensation.where(emotion: 3)
  end
  
  def fear
    @fear = Sensation.where(emotion: 4)
    gon.sensation = Sensation.where(emotion: 4)
  end

  def surprise
    @surprise = Sensation.where(emotion: 5)
    gon.sensation = Sensation.where(emotion: 5)
  end

  def sadness
    @sadness = Sensation.where(emotion: 6)
    gon.sensation = Sensation.where(emotion: 6)
  end

  def disgust
    @disgust = Sensation.where(emotion: 7)
    gon.sensation = Sensation.where(emotion: 7)
  end

  def anger
    @anger = Sensation.where(emotion: 8)
    gon.sensation= Sensation.where(emotion: 8)
  end

end

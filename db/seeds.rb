# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "csv"

CSV.foreach('db/member.csv') do |row|
  Member.create(:nickname => row[0], :gender => row[1], :age => row[2])
end

CSV.foreach('db/spot.csv') do |row|
  Spot.create(:lon => row[0], :lat => row[1], :explain => row[2], :link => row[3])
end

CSV.foreach('db/feeling.csv') do |row|
  Feeling.create(:memid => row[0], :spotid => row[1], :emotion => row[2], :comment => row[3])
end

CSV.foreach('db/sensation.csv') do |row|
  Sensation.create(:lon => row[0], :lat => row[1], :nickname => row[2], :emotion => row[3], :comment => row[4])
end


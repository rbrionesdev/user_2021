# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
# Faker::ChuckNorris.fact
5.times do 
  c1 = User.create(name: Faker::Name.first_name, 
    last_name:Faker::Name.last_name,
    age: rand(18...45), 
    phone:Faker::PhoneNumber.cell_phone, 
    email:Faker::Internet.email, 
    dob:Faker::Date.birthday(min_age: 21, max_age: 65),
    address:Faker::Address.street_address)
end
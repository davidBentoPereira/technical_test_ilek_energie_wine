# Reset data
TastingNote.destroy_all
User.destroy_all
Wine.destroy_all

# Create users
10.times do
  User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email
  )
end

# Create wines
10.times do
  Wine.create!(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price.to_i * 100,
    description: Faker::Lorem.sentences(number: 3).join(" ")
  )
end

# Create tasting_notes
wines = Wine.all
wines.each do |wine|
  5.times do
    TastingNote.create!(
      review: Faker::Number.between(from: 1, to: 5),
      user: User.all.sample,
      wine: wine
    )
  end
end
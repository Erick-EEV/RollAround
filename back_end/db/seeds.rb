# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Like.destroy_all
Comment.destroy_all
Blog.destroy_all

sponge = User.create(name: "SpongeBob", email: "spongebob@gmail.com", specialize: "Karate", profile_pic: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png")
buakaw = User.create(name: "Buakaw", email: "buakaw@gmail.com", specialize: "Muay Thai", profile_pic: "https://d26llhfthmuw63.cloudfront.net/stocks/fighter_card_thumb/26130918015428.PNG")
Blog.create(title: "Meeting Sandy", img: "https://i.pinimg.com/originals/c8/23/b0/c823b08ef83ac1df14786c09f0819e71.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit anim id est laborum.", user_id: sponge.id)
Blog.create(title: "The Making of Ong Bak", img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6855f99a-529e-474b-be73-aad11412f2a1/daxfspr-f945f648-65ad-486f-9826-e7496b6a6468.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjg1NWY5OWEtNTI5ZS00NzRiLWJlNzMtYWFkMTE0MTJmMmExXC9kYXhmc3ByLWY5NDVmNjQ4LTY1YWQtNDg2Zi05ODI2LWU3NDk2YjZhNjQ2OC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.EbOREZEJunfXaJs1Ci4v18xG9mbRC44gjfGIn4q9uEc", description: "non proident, sunt culpa qui officia deserunt mollit anim id est laborum.", user_id: buakaw.id)

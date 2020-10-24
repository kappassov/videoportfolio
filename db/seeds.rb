# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
course = Course.create(title: 'Videos', description: 'My own works')
section = Section.create(title: 'Promos', course: course)
episodes = Episode.create([
    { title: '1. Promo ', description: 'lorem ipsum', url: 'https://player.vimeo.com/video/425544530', section: section},
    { title: '2. Trailer', description: 'lorem ipsum', url: 'https://player.vimeo.com/video/425544530', section: section},
    { title: '3. Video Report', description: 'lorem ipsum', url: 'https://player.vimeo.com/video/425544530', section: section},
    { title: '4. Other', description: 'lorem ipsum', url: 'https://player.vimeo.com/video/425544530', section: section},
])
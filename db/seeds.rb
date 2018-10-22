AdminUser.create!(email: ENV['active_admin_email'], password: ENV['active_admin_password'], password_confirmation: ENV['active_admin_password'])

landing = Landing.create(
  title: "Hi, I'm Amin, I am a Software Engineer"
)

blog_posts = BlogPost.create(
  title: "My First App!",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
)

blog_posts = BlogPost.create(
  title: "My Second App!",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
)

blog_posts = BlogPost.create(
  title: "My Third App!",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
)

selldome = Project.create(
  display_photo: 'https://i.imgur.com/7fmXZvn.png',
  title: "Selldome",
  subtitle: "An AirBnB clone project.",
  techstack: "Built with Ruby on Rails",
  short_description: "AirBnb Clone app developed for an assignment during my bootcamp."
)

AdminUser.create!(email: ENV['active_admin_email'], password: ENV['active_admin_password'], password_confirmation: ENV['active_admin_password'])

landing = Landing.create(
  title: "Hi, I'm Amin. I am a Software Engineer."
)

selldome = Project.create(
  display_photo: 'https://i.imgur.com/7fmXZvn.png',
  title: "Selldome",
  subtitle: "An AirBnB clone project.",
  techstack: "Built with Ruby on Rails",
  short_description: "AirBnb Clone app developed for an assignment during my bootcamp."
)

selldome.paragraphs.create(
  title: 'The Task',
  content: 'This was an individual project given by the bootcamp I enrolled in.
            It was also the first time for me to start coding in Rails. I still remember
            I was struggling on the routes after installing Clearance. It took me several nights
            to solve it. After that, the road to coding an AirBnB clone app seemed much simpler.'
)

selldome.paragraphs.create(
  content: "Starting off with the name, I wanted something weird and punny. I got the name 'Selldome' from
            the word seldom. Hence the tagline 'I selldome go anywhere else but here. Thank you Selldome'."
)

selldome.paragraphs.create(
  photos: 'https://i.imgur.com/PfhuYiq.png',
  title: 'The Design',
  content: "I'll be honest, 70% of the design is inspired from the website itself, AirBnB. However, for me it was
            a starting point for designing. I went for white, fafafa and red as the starter pallete. Since it is an AirBnB 'clone'. However, at that point of time, my Javascript
            was not really good. Hence, I left out the JS part."
)

selldome.paragraphs.create(
  content: "I was using the Bootstrap v4+ framework, so making the website responsive wasn't really a problem."
)

selldome.paragraphs.create(
  photos: 'https://i.imgur.com/LDmhK1i.png'
)

selldome.paragraphs.create(
  photos: 'https://i.imgur.com/3nUEIlo.png',
  title: 'The Technicals',
  content: 'I used alot of JS libraries to make some of the features work. One being the Flatpickr for the calendars used for
            booking. For image upload I used Carrierwave, Minimagick for sizing, and Amazon S3 bucket for storing everything in
            the cloud. Payment system is from Braintree. Very interesting stuff. Of course I also did implement OAuth 2.0 for
            Google Sign In. That really improves the UX.'
)

selldome.paragraphs.create(
  title: 'Conclusion',
  content: "It was a great project for me as I have learned alot about Rails. As of now I am tinkering around React and Rails API mode
            for my next project and without this starting platform, I wouldn't be here. Selldome is live on Heroku now if you would like to check it out. It loads very slow at first due to an error in the code somewhere.
            Nevertheless, it works.",
  live: 'https://selldome.herokuapp.com',
  github: 'https://github.com/qwerqy/selldome'
)

jobcrop = Project.create(
  display_photo: 'https://i.imgur.com/38H5oKU.png',
  title: "JobCrop",
  subtitle: "The solution for Jobhunters.",
  techstack: "Built with React & Ruby On Rails.",
  short_description: "A jobhunting website with a powerful jobhunting metasearch engine."
)

jobcrop.paragraphs.create(
  title: 'The Problem',
  content: "There was a time in 2016 where I was jobless for a few months. I relied on just stock trading but
            during that year Brexit was about to shake the whole financial market. So it wasn't really a good way
            for me to keep up the bills every month."
)

jobcrop.paragraphs.create(
  content: "I went on a jobhunting spree, hopping from one website to another, looking for the job that would fit me.
            I didn't have a good CV back then, hence it was kinda hard. The problem was that, it was complicated for me
            knowing that I had to jump websites everytime I'm not finding what I want. So now with programming, what am I
            able to do?"
)

jobcrop.paragraphs.create(
  photos: 'https://i.imgur.com/38H5oKU.png',
  title: 'The Solution',
  content: 'This project was made in a group during my time at the bootcamp, where we all needed to come up with an app that
            tackles city-life problems in 2 weeks. We wanted to create something that could tackle this problem I was having.
            So we all agreed and started off in day 1. The reason why we named it JobCrop is because we wanted give an impression
            where our app could help crop your jobhunting session a little shorter, hence helping you getting what you want, quicker.'
)

jobcrop.paragraphs.create(
  title: 'The Analysis',
  content: "What do jobhunters do when they first visit a jobhunting site? They start searching through the site and look for the job
            they want. That is one. From the employer side, we know they want data, data and data. Who applied? What's their background?
            Which candidate is fit? What's the trend of the applicants that chose the jobs they posted? All these are important."
)

jobcrop.paragraphs.create(
  photos: 'https://i.imgur.com/8jqraCj.png',
  content: 'From here on we moved onto how we are going to structure the site. Making it a fully packaged site with all the features? Or just one feature.
            We went on making a full fledged app. Not knowing we only had 7 minutes to pitch it, we had to find a quick mind bender to actually show everyone
            why this is different than every other jobhunting sites out there. Before we get there, here are some wireframe sketches showing the initial idea for the app.'
)

jobcrop.paragraphs.create(
  photos: 'https://i.imgur.com/dRUPbHF.jpg'
)

jobcrop.paragraphs.create(
  photos: 'https://i.imgur.com/sIAvRo7.jpg',
  title: "Bringing out the the Big Guns",
  content: 'By the end of the project timeline, we came out with 3 main features, a messaging platform for jobhunters and employers to communicate, an analysis dashboard for employers, and a metasearch engine built for
            scraping job opportunities from other sites.'
)

jobcrop.paragraphs.create(
  photos: 'https://i.imgur.com/P1rgweN.png',
  content: "Messaging - Take a situation, where a Jobhunter is browsing through the jobs in the site, reading through job descriptions and the company background, but can't really seem to decide if that job would be
            the right fit or not, with the messaging app built in , jobhunters are able to chat with the employers or company representative to get a better point of view of the company.
            We encourage mutual understanding for mutual benefit."
)

jobcrop.paragraphs.create(
  photos: 'https://i.imgur.com/udyTwQh.png',
  content: "Employer Dashboard Analytics - We built in an Analytics dashboard for employers to read the data from the activity in our site. It has charts for the type of applicants who
            applied, the ratio of jobs posted and number of applicants applied, and many more."
)

jobcrop.paragraphs.create(
  photos: 'https://i.imgur.com/YghNrE0.png',
  content: "Hunt Engine - Hunt Engine is a metasearch engine that returns job openings from other jobhunting sites. It was the only feature that was built in ReactJS purely. The scraping
            was done with Nokogiri. This was the big gun, the potential gamechanger. It is the solution to my personal problem in 2016, now Jobhunters no longer need to jump from
            site to site, they can just do it in one site."
)

jobcrop.paragraphs.create(
  title: 'Takeaway',
  content: "We all learn and grow together. I couldn't have done it with my group. It was a very packed 2 weeks for me, I just picked up on ReactJS 4 days before the deadline, worked my ass off from day to night implementing
            it on the Hunt Engine. and I did it. Lesson to learn here is, really, passion and pure concentration.",
  github: 'https://github.com/qwerqy/jobcrop'
)

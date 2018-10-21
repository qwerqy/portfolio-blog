import React, { Component } from 'react';
import { Link, Image, Divider, Container, Header } from 'semantic-ui-react';
import JobCropLanding from './JobCropLanding';

class JobCrop extends Component {
  render() {
    return (
      <React.Fragment>
        <JobCropLanding />
          <Container text>
            <Header size='large'>The Problem</Header>
            <Divider hidden/>
            There was a time in 2016 where I was jobless for a few months. I relied on just stock trading but
            during that year Brexit was about to shake the whole financial market. So it wasn't really a good way
            for me to keep up the bills every month.
            <Divider hidden/>
            I went on a jobhunting spree, hopping from one website to another, looking for the job that would fit me.
            I didn't have a good CV back then, hence it was kinda hard. The problem was that, it was complicated for me
            knowing that I had to jump websites everytime I'm not finding what I want. So now with programming, what am I
            able to do?
            <Divider hidden/>
            <Image src='https://i.imgur.com/m1ytpk6.png' fluid/>
            <Divider hidden/>
            <Header size='large'>The Solution</Header>
            <Divider hidden/>
            This project was made in a group during my time at the bootcamp, where we all needed to come up with an app that
            tackles city-life problems in 2 weeks. We wanted to create something that could tackle this problem I was having.
            So we all agreed and started off in day 1. The reason why we named it JobCrop is because we wanted give an impression
            where our app could help crop your jobhunting session a little shorter, hence helping you getting what you want, quicker.
            <Divider hidden/>
            <Header size='large'>The Analysis</Header>
            <Divider hidden/>
            What do jobhunters do when they first visit a jobhunting site? They start searching through the site and look for the job
            they want. That is one. From the employer side, we know they want data, data and data. Who applied? What's their background?
            Which candidate is fit? What's the trend of the applicants that chose the jobs they posted? All these are important.
            <Divider hidden/>
            <Image src='https://i.imgur.com/8jqraCj.png' fluid/>
            <Divider hidden/>
            From here on we moved onto how we are going to structure the site. Making it a fully packaged site with all the features? Or just one feature.
            We went on making a full fledged app. Not knowing we only had 7 minutes to pitch it, we had to find a quick mind bender to actually show everyone
            why this is different than every other jobhunting sites out there. Before we get there, here are some wireframe sketches showing the initial idea for the app.
            <Divider hidden/>
            <Image src='https://i.imgur.com/dRUPbHF.jpg' fluid/>
            <Divider hidden/>
            <Image src='https://i.imgur.com/sIAvRo7.jpg' fluid/>
            <Divider hidden/>
            <Header size='large'>Bringing out the Big Gun</Header>
            By the end of the project timeline, we came out with 3 main features, a messaging platform for jobhunters and employers to communicate, an analysis dashboard for employers, and a metasearch engine built for
            scraping job opportunities from other sites.
            <Divider hidden/>
            <ul>
              <Image src='https://i.imgur.com/P1rgweN.png' fluid/>
              <Divider hidden/>
              <li>
                <Header>Messaging</Header>
                Take a situation, where a Jobhunter is browsing through the jobs in the site, reading through job descriptions and the company background, but can't really seem to decide if that job would be
                the right fit or not, with the messaging app built in , jobhunters are able to chat with the employers or company representative to get a better point of view of the company.
                We encourage mutual understanding for mutual benefit.
              </li>
              <Divider hidden/>
              <Image src='https://i.imgur.com/udyTwQh.png' fluid/>
              <Divider hidden/>
              <li>
                <Header>Employer Dashboard Analysis</Header>
                We built in an Analytics dashboard for employers to read the data from the activity in our site. It has charts for the type of applicants who
                applied, the ratio of jobs posted and number of applicants applied, and many more.
              </li>
              <Divider hidden/>
              <Image src='https://i.imgur.com/YghNrE0.png' fluid/>
              <Divider hidden/>
              <li>
                <Header>Hunt Engine</Header>
                Hunt Engine is a metasearch engine that returns job openings from other jobhunting sites. It was the only feature that was built in ReactJS purely. The scraping
                was done with Nokogiri. This was the big gun, the potential gamechanger. It is the solution to my personal problem in 2016, now Jobhunters no longer need to jump from
                site to site, they can just do it in one site.
              </li>
            </ul>
            <Divider hidden/>
            <Header size='large'>Takeaway</Header>
            We all learn and grow together. I couldn't have done it with my group. It was a very packed 2 weeks for me, I just picked up on ReactJS 4 days before the deadline, worked my ass off from day to night implementing
            it on the Hunt Engine. and I did it. Lesson to learn here is, really, passion and pure concentration.
            <Divider hidden/>
              <a href='https://github.com/qwerqy/jobcrop'><strong> Github Repo</strong></a>
          </Container>
      </React.Fragment>
    )
  }
}

export default JobCrop;

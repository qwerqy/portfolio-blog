import React, { Component } from 'react';
import { Link, Image, Divider, Container, Header } from 'semantic-ui-react';
import '../../../css/SelldomeLanding.css';

class SelldomeLanding extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='selldome-landing'>
        <Container text>
          <Header size='huge' textAlign='center' className='selldome-title'>
            Selldome
            <Header.Subheader>
              An AirBnB clone project.
            </Header.Subheader>
          </Header>
          <Header size='large'>The Task</Header>
          <Divider hidden/>
          This was an individual project given by the bootcamp I enrolled in.
          It was also the first time for me to start coding in Rails. I still remember
          I was struggling on the routes after installing Clearance. It took me several nights
          to solve it. After that, the road to coding an AirBnB clone app seemed much simpler.
          <Divider hidden/>
          Starting off with the name, I wanted something weird and punny. I got the name 'Selldome' from
          the word seldom. Hence the tagline 'I selldome go anywhere else but here. Thank you Selldome'.
          <Divider hidden/>
          <Image src='https://i.imgur.com/7fmXZvn.png' fluid/>
          <Divider hidden/>
          <Header size='large'>The Design</Header>
          <Divider hidden/>
          I'll be honest, 70% of the design is inspired from the website itself, AirBnB. However, for me it was
          a starting point for designing. I went for white, fafafa and red as the starter pallete. Since it is an AirBnB 'clone'. However, at that point of time, my Javascript
          was not really good. Hence, I left out the JS part.
          <Divider hidden/>
          I was using the Bootstrap v4+ framework, so making the website responsive wasn't really a problem.
          <Divider hidden/>
          <Image src='https://i.imgur.com/LDmhK1i.png' fluid/>
          <Image src='https://i.imgur.com/3nUEIlo.png' fluid/>
          <Divider hidden/>
          <Header size='large'>The Technicals</Header>
          <Divider hidden/>
          I used alot of JS libraries to make some of the features work. One being the Flatpickr for the calendars used for
          booking. For image upload I used Carrierwave, Minimagick for sizing, and Amazon S3 bucket for storing everything in
          the cloud. Payment system is from Braintree. Very interesting stuff. Of course I also did implement OAuth 2.0 for
          Google Sign In. That really improves the UX.
          <Divider hidden/>
          <Header size='large'>Conclusion</Header>
          <Divider hidden/>
          It was a great project for me as I have learned alot about Rails. As of now I am tinkering around React and Rails API mode
          for my next project and without this starting platform, I wouldn't be here.
          <Divider hidden/>
          Selldome is live on Heroku now if you would like to check it out. It loads very slow at first due to an error in the code somewhere.
          Nevertheless, it works.
          <Divider hidden/>
          <a href='https://selldome.herokuapp.com'><strong>Live Site </strong></a>
          |
          <a href='https://github.com/qwerqy/selldome'><strong> Github Repo</strong></a>
        </Container>
      </div>
    )
  }
}

export default SelldomeLanding;

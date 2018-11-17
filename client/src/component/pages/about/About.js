import React, { Component } from "react";
import AboutLanding from "./AboutLanding";
import {
  Transition,
  Segment,
  Image,
  Grid,
  Responsive,
  Header,
  Container,
  Divider
} from "semantic-ui-react";

class About extends Component {
  state = {
    visible: false,
    columns: 5,
    skillsets: [
      {
        category: "Software",
        list: [
          {
            name: "Atom",
            url: "https://icongr.am/devicon/atom-original.svg?size=50"
          },
          {
            name: "VSCode",
            url: "https://icongr.am/devicon/visualstudio-plain.svg?size=50"
          },
          {
            name: "Sublime 3",
            url: "https://forum.sublimetext.com/uploads/st-apple-touch-icon.png"
          }
        ]
      },
      {
        category: "Core",
        list: [
          {
            name: "HTML5",
            url: "https://icongr.am/devicon/html5-original.svg?size=50"
          },
          {
            name: "CSS3",
            url: "https://icongr.am/devicon/css3-original.svg?size=50"
          },
          {
            name: "Javascript",
            url: "https://icongr.am/devicon/javascript-original.svg?size=50"
          },
          {
            name: "Node.js",
            url: "https://icongr.am/devicon/nodejs-original.svg?size=50"
          },
          {
            name: "Ruby",
            url: "https://icongr.am/devicon/ruby-original.svg?size=50"
          },
          {
            name: "Postgresql",
            url: "https://icongr.am/devicon/postgresql-original.svg?size=50"
          },
          {
            name: "MongoDB",
            url: "https://icongr.am/devicon/mongodb-original.svg?size=50"
          },
          {
            name: "Docker",
            url: "https://icongr.am/devicon/docker-original.svg?size=50"
          },
          {
            name: "Heroku",
            url: "https://icongr.am/devicon/heroku-original.svg?size=50"
          },
          {
            name: "Git",
            url: "https://icongr.am/devicon/git-original.svg?size=50"
          }
        ]
      },
      {
        category: "Libraries & Frameworks",
        list: [
          {
            name: "React.js & React Native",
            url: "https://icongr.am/devicon/react-original.svg?size=50"
          },
          {
            name: "Express.js",
            url: "https://icongr.am/devicon/express-original.svg?size=50"
          },
          {
            name: "jQuery",
            url: "https://icongr.am/devicon/jquery-original.svg?size=50"
          },
          {
            name: "Ruby On Rails",
            url: "https://icongr.am/devicon/rails-plain.svg?size=50"
          },
          {
            name: "Bootstrap",
            url: "https://icongr.am/devicon/bootstrap-plain.svg?size=50"
          },
          {
            name: "Sinatra",
            url: "https://img.stackshare.io/service/999/logo.png"
          },
          {
            name: "Semantic UI",
            url: "https://react.semantic-ui.com/logo.png"
          },
          {
            name: "Native Base",
            url: "https://nativebase.io/assets/img/front-page-icon.png"
          }
        ]
      }
    ]
  };

  componentDidMount = () => {
    this.handleFade();
  };

  handleFade = () => {
    this.setState({
      visible: true
    });
  };

  handleWidth = width => {
    if (width >= 992) {
      this.setState({
        columns: 5
      });
    } else if (width <= 991 && width >= 768) {
      this.setState({
        columns: 4
      });
    } else if (width <= 767 && width >= 320) {
      this.setState({
        columns: 3
      });
    }
  };

  render() {
    const { columns, visible, skillsets } = this.state;
    return (
      <React.Fragment>
        <AboutLanding />
        <Transition visible={visible} animation="fade" duration={1000}>
          <Image
            src="https://imgur.com/5bh0mbf.png"
            centered
            circular
            size="medium"
          />
        </Transition>
        <Transition visible={visible} animation="fade" duration={1300}>
          <Container text>
            <Divider />
            <Header>Hello, it's Amin!</Header>I am from Malaysia. I am a
            passionate software engineer who seek to create a better and smarter
            tomorrow. Throughout the years, I have attained a set of skills to
            innovate and produce something out of nothing. I create
            opportunities from a blank canvas.
            <br />
            <br />I am a quick learner & a problem solver. I am a team-player, I
            work well in a group of people who share the same goal as I do. I am
            a critical thinker, which I've adapted throughout the years.
            <br />
            <br />I take my tasks and work priorities, regardless big or small,
            very seriously. My focus towards completing a task is fueled by the
            drive of delivering the best product to my clients.
            <Divider />
            <Header>My Skillset</Header>
            {Object.keys(skillsets).map(key => {
              const list = skillsets[key].list;
              return (
                <Segment>
                  <Header textAlign="center">{skillsets[key].category}</Header>
                  <Responsive
                    getWidth={() => this.handleWidth(window.innerWidth)}
                  >
                    <Grid columns={columns}>
                      {Object.keys(list).map(lkey => {
                        return (
                          <Grid.Column
                            style={{
                              height: list[key].url ? "" : "50px",
                              lineHeight: list[lkey].url ? "" : "50px",
                              textAlign: "center",
                              marginBottom: "2rem"
                            }}
                          >
                            <Image
                              centered
                              src={list[lkey].url}
                              style={{ width: "50px" }}
                            />
                            <span
                              style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                                lineHeight: "normal"
                              }}
                            >
                              {list[lkey].name}
                            </span>
                          </Grid.Column>
                        );
                      })}
                    </Grid>
                  </Responsive>
                </Segment>
              );
            })}
          </Container>
        </Transition>
      </React.Fragment>
    );
  }
}

export default About;

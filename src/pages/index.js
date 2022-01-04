import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Delara Shamanian | Portfolio" />
        <Header />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <Intro />

          <Projects />
          <Skills />
          <Experience />
        </div>
      </Layout>
    )
  }
}

export default Index

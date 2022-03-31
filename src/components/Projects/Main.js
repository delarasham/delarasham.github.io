import PropTypes from 'prop-types'
import React from 'react'
import CTF2022 from '../../assets/images/CTF2022.png'
import RubiCubeman from '../../assets/images/RubiCubeman.png'
import Workshop from '../../assets/images/Workshop.png'
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'Workshop' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Network and Fuzzing Workshop</h2>
          <span className="image main">
            <img src={Workshop} alt="" />
          </span>
          <p>
            Advanced workshop on enumeration tools such as nmap, gobuster, and
            wfuzz. Created slides for the presentation as well as a website
            where challenges were hosted for students to use the tools against.
            The website was hosted on Digital Ocean using Docker, Nginx, PHP,
            and MySQL.
          </p>
          <p>
            <a
              className="button"
              href="https://youtu.be/5atCBzYpNBs"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Watch Video</span>
            </a>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'MagpieCTF' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">MagpieCTF 2022</h2>
          <span className="image main">
            <img src={CTF2022} alt="" />
          </span>
          <p>
            Capture the Flag competition hosted by the University of Calgary
            Information Security club. The competition consists of various
            challenges in the field of information security such as web
            exploitation, cryptography, forensics, reverse engineering, binary
            Exploitation, etc. As head of infrastructure, I have worked to
            transition our cloud infrastructure from Digital Ocean to Amazon Web
            Services. I have also worked on hosting and managing the website of
            the competition using the CTFd platform. Tools such as Terraform and
            docker-compose were used to automate the creation and management of
            the infrastructure.
          </p>
          <p>
            <a
              className="button"
              href="https://magpiectf.ca/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Visit Website</span>
            </a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'RubiCubeman' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Rubie-Cubeman Protocol Visualizer</h2>
          <span className="image main">
            <img src={RubiCubeman} alt="" />
          </span>
          <p>
            Group project implemented for CPSC329: Information Security and
            Privacy. This is the visualization of the Rubie-Cubeman Public
            Key-Exchange Protocol introduced by Professor Ryan Henry. The
            development of the website used tools such as JavaScript, HTML, CSS,
            and Bootstrap to create a visual for the protocol.
          </p>
          <p>
            <a
              className="button"
              // href="https://pr.iva.cy/rubie-cubeman/"
              href="https://github.com/zgilchrist/CPSC-329-Unessay"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Source Code</span>
            </a>
          </p>
          {close}
        </article>

        {/* <article
          // id="about"
          className={`${this.props.article === 'website' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Personal Website</h2>
          
          {close}
        </article> */}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

import PropTypes from 'prop-types'
import React from 'react'

const Header = (props) => {
  return (
    <header className="major" style={props.timeout ? { display: 'none' } : {}}>
      <h2>Projects</h2>
      <ul className="features">
        <li>
          <span className="icon major style2 fa-flag-o"></span>
          <h3>MagpieCTF 2022</h3>
          <p>
            A Capture the Flag competition hosted by the University of Calgary's
            InfoSec Club
          </p>
          <a
            class="button"
            onClick={() => {
              props.onOpenArticle('MagpieCTF')
            }}
          >
            Learn More
          </a>
        </li>
        <li>
          <span className="icon major style1 fa-server"></span>

          <h3>Network and Fuzzing Workshop</h3>
          <p>
            An in-depth look at how to make use of tools such as nmap, gobuster,
            and wfuzz
          </p>
          <a
            class="button"
            onClick={() => {
              props.onOpenArticle('Workshop')
            }}
          >
            Learn More
          </a>
        </li>

        <li>
          <span className="icon major style3 fa-cube "></span>
          <h3>Rubie-Cubeman Protocol Visualizer</h3>
          <p>Visualizer for the Rubie-Cubeman Public Key-Exchange Protocol</p>
          <a
            class="button"
            onClick={() => {
              props.onOpenArticle('RubiCubeman')
            }}
          >
            Learn More
          </a>
        </li>
      </ul>
      <p>
        For more projects I've worked on you can visit my{' '}
        <a
          href="https://github.com/delarasham"
          target="_blank"
          rel="noreferrer"
        >
          <span className="label">GitHub</span>
        </a>{' '}
        repository.
      </p>
    </header>
  )
}
Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

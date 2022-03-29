import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
const Skills = () => {
  return (
    <section id="second" className="main special">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>Skills</h2>
          </header>
          <div className="skills ">
            <h3 className="skills ">Languages {'&'} Frameworks</h3>
            <ul className="actions skills">
              <li className="skills icon style4">
                <i class="devicon-c-line-wordmark"></i>
              </li>
              <li className="skills icon style4">
                <i class="devicon-cplusplus-line-wordmark"></i>
              </li>
              <li className="skills icon style4">
                <i class="devicon-java-plain-wordmark"></i>
              </li>

              <li className="skills icon style4">
                <i class="devicon-python-plain-wordmark"></i>
              </li>
              <li className="skills icon style4">
                <FontAwesomeIcon icon={['fab', 'js-square']} size="5x" />
              </li>

              <li className="skills icon style4">
                <i class="devicon-bash-plain"></i>
              </li>
              <li className="skills icon style4">
                <i class="devicon-react-original-wordmark"></i>
              </li>
              <li className="skills icon style4">
                <i class="devicon-html5-plain-wordmark"></i>
              </li>
            </ul>
          </div>

          <div className="skills ">
            <h3 className="skills ">Tools {'&'} Services</h3>
            <ul className="actions">
              <li className="skills icon style4">
                <i class="devicon-docker-plain-wordmark"></i>
              </li>
              <li className="skills icon style4">
                <i class="devicon-digitalocean-plain-wordmark"></i>
              </li>
              <li className="skills icon style4">
                <FontAwesomeIcon icon={['fab', 'aws']} size="4x" />
              </li>
              <li className="skills icon style4">
                <i class="devicon-git-plain"></i>
              </li>
              <li className="skills icon style4">
                <i class="devicon-github-original-wordmark"></i>
              </li>
              <li className="skills icon style4">
                <i class="devicon-gitlab-plain-wordmark"></i>
              </li>

              <li className="skills icon style4">
                <FontAwesomeIcon icon={['fab', 'cloudflare']} size="4x" />
              </li>
            </ul>
          </div>
          <div className="skills ">
            <h3 className="skills ">Operating Systems</h3>
            <ul className="actions ">
              <li className="skills icon style4">
                <FontAwesomeIcon icon={['fab', 'windows']} size="4x" />
              </li>
              <li className="skills icon style4">
                <FontAwesomeIcon icon={['fab', 'linux']} size="4x" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

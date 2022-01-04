import React from 'react'
import resume from '../assets/pdf/Delara-Shamanian-Resume-2022.pdf'
const Experience = () => {
  return (
    <section id="cta" className="main">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>Experience</h2>
          </header>

          <div class="container">
            <div class="timeline">
              <div class="timeline-container ">
                <div class="timeline-icon icon fa-user-secret">
                  <i class="far fa-grin-wink"></i>
                </div>
                <div class="timeline-body">
                  <h4 class="timeline-title">
                    <span class="badge">
                      University of Calgary Information Security Club
                    </span>
                  </h4>
                  <h4 class="timeline-title">
                    <span class="badge-title">Director</span>
                  </h4>
                  <p>
                    <ul>
                      <li>
                        Administer the cloud Infrastructure for the club's
                        annual capture the flag (CTF) competition MagpieCTF 2022
                      </li>
                      <li>
                        Improve and transition current cloud infrastructure from
                        Digital Ocean to Amazon Web Services
                      </li>
                      <li>
                        Compose Terraform scripts to automate hosting challenges
                        for MagpieCTF 2022
                      </li>
                      <li>
                        Collaborated with the executive team to design and host
                        the website for MagpieCTF 2022
                      </li>
                      <li>
                        Built and Delivered a hands-on workshop on frequently
                        used networks and fuzzing tools
                      </li>
                    </ul>
                  </p>
                  <p class="timeline-subtitle">October 2020 - Present</p>
                </div>
              </div>
              <div class="timeline-container ">
                <div class="timeline-icon icon fa-plus">
                  <i class="far fa-grin-wink"></i>
                </div>
                <div class="timeline-body">
                  <h4 class="timeline-title">
                    <span class="badge">MathPro Learning Center Inc.</span>
                  </h4>
                  <h4 class="timeline-title">
                    <span class="badge-title">Tutor</span>
                  </h4>
                  <p>
                    <ul>
                      <li>
                        Assist High School and University students with subjects
                        such as Calculus, Chemistry, and Statistics to expand
                        their knowledge and achieve their academic goals
                      </li>
                      <li>
                        Assign relevant homework to elevate students{'’'}
                        performance
                      </li>
                      <li>
                        Monitor and report students{'’'} progress in the form of
                        a written progress report and adjust lesson plans where
                        necessary
                      </li>
                    </ul>
                  </p>
                  <p class="timeline-subtitle">November 2019 - Present</p>
                </div>
              </div>
              <div class="timeline-container ">
                <div class="timeline-icon icon fa-search">
                  <i class="far fa-grin-wink"></i>
                </div>
                <div class="timeline-body">
                  <h4 class="timeline-title">
                    <span class="badge">Mitacs and Univesity of Calgary</span>
                  </h4>
                  <h4 class="timeline-title">
                    <span class="badge-title">Research Intern</span>
                  </h4>
                  <p>
                    <ul>
                      <li>
                        Completed a project based on Cloud Computing Security
                        and Game Theory where a security attack on a cloud
                        environment was modeled as a game to discover Nash
                        equilibria
                      </li>
                      <li>
                        Reviewed and analyzed related papers to find patterns
                        and expand relevant results
                      </li>
                      <li>
                        Presented the result of the research to a group of 5
                        supervisors and students
                      </li>
                    </ul>
                  </p>
                  <p class="timeline-subtitle">August 2020 - December 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a
              className="button special"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience

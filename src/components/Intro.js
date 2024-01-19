import React from 'react'
import pic01 from '../assets/images/image0.jpeg'
import Media from '../components/media'
const Intro = () => {
  return (
    <section id="intro" className="main">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>About</h2>
          </header>
          <p>
            <p>
              Hi there! I'm Delara Shamanian, a recent graduate from the
              University of Calgary with a bachelor's degree in Computer
              Science. My main focus during my studies was Information Security,
              and I also minored in Mathematics.
            </p>
            <p>
              Since May 2022, I have been working as a DevOps Developer at
              Stream Systems Ltd. In my devops role, I primarily engage in tasks
              involving AWS and Kubernetes, along with Bash scripting for
              automation and various operations work. Additionally, I
              occasionally delve into backend development using Kotlin and Java.
            </p>
            <p>
              Outside of work, I'm actively involved in security-related
              activities and thoroughly enjoy participating in CTF competitions
              during my free time. It's a passion of mine to stay connected with
              the cybersecurity community and continuously enhance my skills in
              this exciting field.
            </p>
            <p>
              My long-term career goal is to specialize in DevSecOps and pursue
              roles related to Cloud Infrastructure and Security. In my free
              time I like to paint and listen to podcasts/audiobooks.
            </p>
            <p>
              You can contact me via
              <a
                href="mailto:delara.sham@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label"> Gmail</span>
              </a>{' '}
              or{' '}
              <a
                href="https://www.linkedin.com/in/delara-shamanian/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
              .
            </p>
          </p>
          <Media />
        </div>
        <span className="image">
          <img src={pic01} alt="" />
        </span>
      </div>
    </section>
  )
}

export default Intro

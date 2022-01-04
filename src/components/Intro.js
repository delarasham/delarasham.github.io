import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
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
              I'm a third-year Computer Science undergraduate student at the
              University of Calgary. My main focus is Information Security, but
              I'm also minoring in Mathematics.
            </p>
            <p>
              Since May 2021, I have been a Director at the University of
              Calgary's Infomation Security Club. I am currently developing and
              managing the cloud infrastructure for an upcoming Capture the Flag
              competition hosted by the club.
            </p>
            <p>
              My long term career goal is to work in DevSecOps and/or jobs
              related to Cloud Infrastructure and Security. In my free time I
              like to paint and listen to podcasts/audiobooks.
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

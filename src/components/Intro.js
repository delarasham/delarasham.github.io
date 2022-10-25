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
              Hi there! My name is Delara Shamanian. I'm a forth-year Computer
              Science undergraduate student at the University of Calgary. My
              main focus is Information Security, but I'm also minoring in
              Mathematics.
            </p>
            <p>
              Since May 2022, I have been an Intern at Stream Systems Ltd. I do devops, development and sometimes QA work.
              I usually work on back-end development and mainly use Kolin or Java. I also work with Jenkins, Kubernetes,
              and Docker regarding my devops work. 
            </p>
            <p>
              Aside from my internship, I am also a VP Tech at the University of
              Calgary's Infomation Security Club. I am responsible for creating and
              managing the cloud infrastructure for our CTF as well as our workshop challenges.
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

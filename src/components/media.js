import React from 'react'
import resume from '../assets/pdf/Delara-Shamanian-Resume-2024.pdf'
const Media = () => {
  return (
    <div>
      <ul className="icons">
        <li>
          <a
            href="https://github.com/delarasham"
            className="icon fa-github alt"
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/delara-shamanian/"
            className="icon fa-linkedin alt"
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:delara.sham@gmail.com"
            target="_blank"
            className="icon fa-envelope alt"
            rel="noreferrer"
          >
            <span className="label">Email</span>
          </a>
        </li>
        <li>
          <a
            href={resume}
            target="_blank"
            className="icon fa-file alt"
            rel="noreferrer"
          >
            <span className="label">Resume</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Media

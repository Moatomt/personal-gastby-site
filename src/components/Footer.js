import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://github.com/Moatomt/" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matthew-kelly-ng/"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Moatomt</li>
        <li>
          Site template and design by:{' '}
          <a href="https://html5up.net">HTML5 UP</a>
        </li>
        <li>Used under the Creative Commons Attribution 3.0 License</li>
      </ul>
    </div>
  </footer>
)

export default Footer

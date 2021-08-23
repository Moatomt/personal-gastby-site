import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>This site is a work in progress</h1>
      </header>
      <div className="content">
        <p>
          Built with Gatsby (which uses react) and a site template by HTML5UP.
          This site is compiled into static pages and served via Github Pages
        </p>
        {/* <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul> */}
      </div>
    </div>
  </section>
)

export default Banner

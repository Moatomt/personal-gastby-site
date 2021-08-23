import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

import webDevPicture from '../assets/images/webDevThumbnail.jpg'
import christianPicture from '../assets/images/christianThumbnail.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Blog - Moatomt</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Blog topics</h2>
          </header>
          <p>
            I currently have the following blog topics listed below. Over the
            course of this websites time, this will probably grow. I hope to
            have a programatic way of generating these groupings but for the
            time being they're manually created.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="christian" className="image">
            <img src={christianPicture} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Christian</h3>
              </header>
              <p>
                Mostly bible studies for the young adults bible study I lead.
              </p>
              <ul className="actions">
                <li>
                  <Link to="christian" className="button">
                    Read
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="development" className="image">
            <img src={webDevPicture} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Development</h3>
              </header>
              <p>
                Read about my journey through web development and other
                different topics. At this stage this is more of a journal for
                myself to keep track of my random technical endevours.
              </p>
              <ul className="actions">
                <li>
                  <Link to="development" className="button">
                    Read
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing

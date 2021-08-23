import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'
import BannerLanding from '../../components/BannerLanding'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Development - Moatomt</title>
      <meta name="description" content="Development Blog" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Development</h2>
          </header>
          <p>Stay tuned for more ramblings.</p>
          <hr className="major" />
          <ul className="alt">
            <li>
              <Link to="gatsby-setup">
                <h4>Setting up Gatsby</h4>
              </Link>
            </li>
            <li>
              <Link to="updating-gatsby-to-version-3">
                <h4>Updating Gatsby to Version 3</h4>
              </Link>
            </li>
            <li>
              <Link to="mdx">
                <h4>Resolving problems with mdx</h4>
              </Link>
            </li>
            <li>
              <Link to="android-root">
                <h4>Getting Root on my Android Phone</h4>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Landing

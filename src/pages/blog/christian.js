import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'
import BannerLanding from '../../components/BannerLanding'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Christian - Moatomt</title>
      <meta name="description" content="Christian Blog" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Bible Studies</h2>
          </header>
          <p>
            I currently only have the following questions from the Jesus the
            Game Changer Series but plan to populate it with studies I have
            written.
          </p>
          <hr className="major" />
          <ul className="alt">
            <li>
              <Link to="jesus-the-game-changer/jesus-of-nazareth">
                <h4>Jesus of Nazareth</h4>
                <p>Week 1</p>
              </Link>
            </li>
            <li>
              <Link to="jesus-the-game-changer/paul-and-the-early-church">
                <h4>Paul and the Early Church</h4>
                <p>Week 2</p>
              </Link>
            </li>
            <li>
              <Link to="jesus-the-game-changer/the-persecuted-church">
                <h4>The Persecuted Church</h4>
                <p>Week 3</p>
              </Link>
            </li>
            <li>
              <Link to="jesus-the-game-changer/africa">
                <h4>Africa</h4>
                <p>Week 4</p>
              </Link>
            </li>
            <li>
              <Link to="jesus-the-game-changer/ireland">
                <h4>Ireland</h4>
                <p>Week 5</p>
              </Link>
            </li>
            <li>
              <Link to="jesus-the-game-changer/europe">
                <h4>Europe</h4>
                <p>Week 6</p>
              </Link>
            </li>
            <li>
              <Link to="jesus-the-game-changer/the-jesuits">
                <h4>The Jesuits</h4>
                <p>Week 7</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Landing

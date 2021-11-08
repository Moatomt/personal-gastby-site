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
          <header className="major">
            <h3>Philippians</h3>
          </header>
          <hr className="major" />
          <ul className="alt">
            <li>
              <Link to="philippians/philippians-1:1-11">
                <h4>Understanding God's Love</h4>
                <p>Week 1</p>
              </Link>
            </li>
          </ul>
          <header className="major">
            <h3>Mark</h3>
          </header>
          <hr className="major" />
          <ul className="alt">
            <li>
              <Link to="mark/the-way-of-the-cross-mark-8">
                <h4>The Way of the Cross</h4>
                <p>Week 1</p>
              </Link>
            </li>
          </ul>
          <header className="major">
            <h3>Jesus The Game Changer</h3>
          </header>
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

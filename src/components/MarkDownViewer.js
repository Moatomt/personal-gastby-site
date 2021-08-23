import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

class MarkDownViewer extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title={this.props.meta.name + ' - Moatomt'}
          meta={[
            {
              name: 'description',
              content: 'Welcome to my blog where I document my learning',
            },
            { name: 'keywords', content: 'Moatomt, Blog, Bible Studies' },
          ]}
        ></Helmet>
        <BannerLanding />
        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>{this.props.meta.name}</h1>
              </header>
              {this.props.children}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default MarkDownViewer

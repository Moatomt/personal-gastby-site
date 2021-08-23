import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner" style={{ 'text-align': 'center' }}>
          <h1>NOT FOUND</h1>
          <p>You just hit a link that doesn't exist... the sadness.</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage

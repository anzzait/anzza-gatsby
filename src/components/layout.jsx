import * as React from 'react'

import './variables.css'
import './global.scss'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) =>{
  return (
    <>
      <StagingDisplay isStaging={process.env.GATSBY_DEPLOYMENT_ENV === 'staging'}/>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}


const StagingDisplay = ({isStaging}) => {

  return (
    <>
    {isStaging && (
      <div className="staging-banner" style={{ textAlign: 'center', backgroundColor: '#ffcccc' }}>
        ⚠️ ステージング環境です ⚠️
      </div>
    )}
    </>
  )
}

export default Layout

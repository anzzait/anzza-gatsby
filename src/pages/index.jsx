// src/pages/index.jsx
import React, { useEffect } from 'react';
import Layout from '../components/layout'
import { Element } from 'react-scroll'

import Hero from "../components/hero"
import Aboutus from '../sections/aboutus'
import Inquiry from '../sections/inquiry'
import Access from '../sections/access'

import SEO from '@/components/SEO'

const IndexPage = () => {
  useEffect(() => { 
    if (window.location.search) {
      const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);
  
  return (
    <SEO>
      <Layout>
        <main>
          <Hero />
          <Element name="aboutus">
            <Aboutus/>
          </Element>
          <Element name="inquiry">
            <Inquiry/>
          </Element>
          <Element name="access">
            <Access/>
          </Element>
        </main>
      </Layout>
    </SEO>
  )
}

export default IndexPage


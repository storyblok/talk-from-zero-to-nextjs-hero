import React from 'react'
import StoryblokService from '../utils/storyblok-service'

const Layout = ({ children }) => (
  <div>
    <div className="max-w-5xl py-10 mx-auto">
      {children}
      {StoryblokService.bridge()}
    </div>
  </div>
)

export default Layout

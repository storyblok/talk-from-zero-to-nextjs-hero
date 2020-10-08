import React from 'react'
import StoryblokService from '../utils/storyblok-service'

const Layout = ({ children }) => (
  <div>
    <div className="util__container max-w-lg py-16 mx-auto">
      {children}
      {StoryblokService.bridge()}
    </div>
  </div>
)

export default Layout

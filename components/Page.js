import Component from './index'
import SbEditable from 'storyblok-react'

const Page = ({content}) => (
  <SbEditable content={content}>
    <main>
      {content.body.map((blok) =>
        <Component blok={blok} key={blok._uid} />
      )}
    </main>
  </SbEditable>
)

export default Page

import Component from './index'
import SbEditable from 'storyblok-react'

const Page = ({content}) => (
  <SbEditable content={content}>
    <main>
      <h1 className="pb-20 text-center">PAGE</h1>
      {content.body.map((blok) =>
        <Component blok={blok} key={blok._uid} />
      )}
    </main>
  </SbEditable>
)

export default Page

import React from 'react'
import SbEditable from 'storyblok-react'

export default class extends React.Component {

  render() {
    const { blok } = this.props

    return (
      <SbEditable content={blok}>
        <div className="py-6 teaser bg-green-100">
          <h2 className="text-2xl font-bold text-center">{blok.headline}</h2>
        </div>
      </SbEditable>
    )
  }
}

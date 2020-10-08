import React from 'react'
import Page from '../components/Page'
import Layout from '../components/Layout'
import StoryblokService from '../utils/storyblok-service'

// export async function getStaticProps(preview=true) {
//   const res = await StoryblokService.get('cdn/stories/home')

//   return {
//     props: {
//       story: res.data.story
//     }, // will be passed to the page component as props
//   }
// }

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    let res = await StoryblokService.get('cdn/stories/home')

    return {
      res
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const contentOfStory = this.state.story.content

    return (
      <Layout>
        <Page content={contentOfStory} />
      </Layout>
    )
  }
}

import React from 'react'
import Page from '../components/Page'
// import Layout from '../components/layout'
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
      pageContent: props.page.data.story.content,
    }
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    let page = await StoryblokService.get('cdn/stories/home')

    return {
      page
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const bodyOfPage = this.state.pageContent.body
    // const contentOfStory = this.props.story.content

    return (
      <div className='max-w-lg py-16 mx-auto'>
        <Page content={bodyOfPage} />
      </div>
    )
  }
}

// The Storyblok Client
import Storyblok from "../lib/storyblok"
import useStoryblok from "../lib/storyblok-hook"
import Page from '../components/Page'
import Layout from '../components/Layout'

export default function Home(props) {
  // the Storyblok hook to enable live updates
  const story = useStoryblok(props.story)

  return (
    <div>
      <main>
        { story ? <Layout><Page content={story.content} /></Layout> : null }
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  let slug = "home"
  let params = {
    version: "draft", // or 'published'
    "resolve_relations": "featured-articles.articles"
  }

  if (context.preview) {
    params.version = "draft"
    params.cv = Date.now()
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
    revalidate: 10,
  }
}

import Teaser from './Teaser'
import Feature from './Feature'
import Grid from './Grid'
// import FeaturedArticles from './FeaturedArticles'
import Placeholder from './Placeholder'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  // 'featured-articles': FeaturedArticles
}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent

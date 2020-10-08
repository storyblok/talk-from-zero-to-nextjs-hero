import Teaser from './Teaser'
import Placeholder from './Placeholder'

const Components = {
  'teaser': Teaser
}

const Component = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default Component

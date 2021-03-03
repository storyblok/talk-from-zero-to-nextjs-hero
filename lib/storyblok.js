import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'tocNxcKYb5Y11bQgWVWfpAtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok

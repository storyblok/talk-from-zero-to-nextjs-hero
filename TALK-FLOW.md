# Live coding 
- create Next.js project

`yarn create next-app going-headless-nextjs`

## Jump to prepared repo with comments

- show the welcome screen

## Create Storyblok Space
- `Going headless Nextjs - Showcase`
- preview sample content & components
- visual editor & content editor
- show preview TOKEN

## Setup the PREVIEW

`yarn add storyblok-react storyblok-js-client axios`

- show StoryblokService.js
- set the PREVIEW_TOKEN
  - should be set in .env
  - change real path `/`
- show Next.js Welcome Screen in Storyblok

## Create the default components & explain in Next.js
- Page, Teaser, Grid, Feature
- include TailwindCSS
- DynamicComponents.js

## Explain Loading Data from Storyblok using index.js
- getInitialProps
- StoryblokService.js
- Load from draft
- Save & Publish Event
- Input Event & using state
- init of StoryblokBridge in Layout

## Create Article & FeaturedArticles in Storyblok
- Article
  - hero_image, title, intro, author, prose
- Create Article
- FeaturedArticles
  - articles - `articles/`
- Add FeaturedArticles to Page
  - explain referenced

## Create FeaturedArticles & Article Teaser in Next.js
- explain 
- uncomment FeaturedArticles in DynamicComponent.js
- explain resolving references

## Show sorting

import ArticleTeaser from './ArticleTeaser'

const FeaturedArticles = ({blok}) => {
  return (
    <div className="py-8 mb-6">
      <div className="relative">
        <h2 className="relative font-serif text-4xl z-10">{blok.title}</h2>
        <div className="absolute top-0 w-64 h-10 mt-6 -ml-4 bg-yellow-300 opacity-50" />
      </div>
      <ul className="flex -mx-8">
        {blok.articles.map((article) => (
            <li key={article.content._uid} className="flex-auto px-8">
              <ArticleTeaser blok={article.content} />
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default FeaturedArticles

import DynamicComponent from './DynamicComponent'

const Grid = ({blok}) => {
  return (
    <ul className="flex py-8 mb-6">
      {blok.columns.map((nestedBlok) => (
          <li key={nestedBlok._uid} className="flex-auto px-6">
            <DynamicComponent blok={nestedBlok} />
          </li>
        )
      )}
    </ul>
  )
}

export default Grid

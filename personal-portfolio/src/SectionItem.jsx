import Icon from "./Icon";

export default function ItemsSection({listItems}) {

	return (
		<section>
      {listItems.map(({title, items}) => (
        <article>
          <h2>{ title }</h2>
          <ul>
            {
          items.map(({ url, iconType }) => (<li href= { url } > <Icon iconType={iconType} /></li>))}
          </ul>	
        </article>
      ))}
		</section>
	)
}
import linkArr from '../data/navLinks'

export default function NavBar() {
  return (
    <nav>
      <ul>
        {linkArr.map((elem, index) => (
          <li key={index}>
            <a href={elem.link}>{elem.content}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

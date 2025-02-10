import linkArr from '../data/navLinks'

export default function NavBar() {
  return (
    <div className='mx-auto max-w-6xl'>
      <nav className='flex px-1 py-3'>
        <div className='max-w-lg grow px-3'>
          <h1>Logo</h1>
        </div>
        <div className='flex w-full justify-end'>
          <ul className='flex columns-3 gap-8 px-3 text-center'>
            {linkArr.map((elem, index) => (
              <li key={index}>
                <a href={elem.link}>{elem.content}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

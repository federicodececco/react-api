export default function UserRow({ user, remove, modify }) {
  if (user.visible === true) {
    return (
      <li className='columns-4 px-2 py-1'>
        <div className='text-black'> {user.name}</div>
        <div className='text-black'>{user.author}</div>
        <div className='text-black'>{user.role}</div>
        <div className=''>
          <button
            className='px-2 text-red-600 hover:bg-slate-200'
            onClick={remove}
          >
            <i className='fa-solid fa-trash-can'></i>
          </button>
          <button className='px-3 text-black' onClick={modify}>
            <i class='fa-solid fa-pen-to-square'></i>
          </button>
        </div>
      </li>
    )
  } else return
}

export default function UserRow({ user, remove, modify }) {
  if (user.visible === true) {
    return (
      <div className='overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'>
        <img
          src={user.img}
          alt='Sarah Johnson'
          className='h-64 w-full object-cover'
        />
        <div className='p-6'>
          <h3 className='mb-2 inline text-xl font-bold text-gray-800'>
            {user.author}
          </h3>{' '}
          <span>
            <button
              className='rounded-lg px-2 text-gray-200 hover:bg-red-500'
              onClick={remove}
            >
              <i className='fa-solid fa-trash-can'></i>
            </button>
          </span>
          <p className='mb-3 font-medium text-blue-600'>{user.role}</p>
          <div className='mb-2 flex items-center text-gray-600'>
            <span>{user.content}</span>
          </div>
          <div className='flex items-center text-gray-600'>
            <span>{user.name}</span>
          </div>
        </div>
      </div>
      /*  <li className='columns-4 px-2 py-1'>
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
      </li> */
    )
  } else return
}

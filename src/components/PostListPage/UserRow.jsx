import { Link } from 'react-router-dom'
export default function UserRow({ user, remove, modify, index }) {
  if (user.visible === true) {
    return (
      <div className='overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'>
        <Link to={`/post-list/${user.id}`}>
          <img src={user.img} className='h-64 w-full object-cover' />
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
        </Link>
      </div>
    )
  } else return
}

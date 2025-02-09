import cardFile from '../data/cardFile'
export default function HomeMain() {
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {cardFile.map((card, index) => {
        return (
          <div
            key={index}
            className='rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg'
          >
            <div>
              <div class='mb-4 text-2xl'>{card.icon}</div>
              <h1 className='mb-3 text-xl font-semibold text-gray-800'>
                {card.title}
              </h1>
            </div>
            <div className='mb-4 text-gray-600'>{card.content}</div>
            <div className='flex justify-end'>
              <button className='hover:text-blue-750 font-medium text-blue-600 transition-colors hover:cursor-pointer'>
                Learn more...
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

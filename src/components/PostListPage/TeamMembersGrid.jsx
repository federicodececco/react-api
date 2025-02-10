import UserRow from './UserRow'
export default function TeamMembersGrid({ remove, modify, usersList }) {
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {usersList.map((elem, index) => {
        return (
          <UserRow
            index={index}
            key={elem.id}
            user={elem}
            remove={() => remove(elem.id)}
            modify={() => modify(elem.id)}
          />
        )
      })}
    </div>
  )
}

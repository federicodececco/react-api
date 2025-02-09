export default function Form({ user, formField, formSubmit }) {
  return (
    <>
      <form onSubmit={formSubmit}>
        <input
          className='my-4 border px-1 text-emerald-800'
          name='name'
          type='text'
          value={user.name}
          onChange={event => {
            formField('name', event.target.value)
          }}
        />
        <input
          className='my-4 border px-1 text-emerald-800'
          name='author'
          type='text'
          value={user.author}
          onChange={event => {
            formField('author', event.target.value)
          }}
        />
        <input
          className='my-4 border px-1 text-emerald-800'
          name='content'
          type='text'
          value={user.content}
          onChange={event => {
            formField('content', event.target.value)
          }}
        />
        <input
          name='visible'
          type='checkbox'
          checked={true}
          onChange={event => {
            formField('visible', event.target.checked)
          }}
        />
        <select
          name='role'
          onChange={event => {
            formField('role', event.target.value)
          }}
        >
          <option value='FrontEnd'>FrontEnd</option>
          <option value='BackEnd'>BackEnd</option>
          <option value='UI/UX'>UI/UX</option>
        </select>
        <button
          type='submit'
          className='mx-1 border-1 px-4 text-slate-900 hover:border-2'
        >
          Aggiungi
        </button>
      </form>
    </>
  )
}

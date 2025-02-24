export default function Header() {
  return (
    <header>
      <form className='input__form' id='task'>
        <input 
          className='input' 
          type='text'
          placeholder='What needs to be done?'
        />
      </form>
    </header>
  )
}

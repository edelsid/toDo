export default function Options() {
  return (
    <ul className='options'>
      <li className='option active' id='all'>
        <button className='btn' type='button'>
          All
        </button>
      </li>
      <li className='option' id='active'>
        <button className='btn' type='button'>
          Active
        </button>
      </li>
      <li className='option' id='completed'>
        <button className='btn' type='button'>
          Completed
        </button>
      </li>
    </ul>
  )
}

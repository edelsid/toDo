import operations from "../operations"

export default function Clear() {
  return (
    <button className='btn' type='button' onClick={operations.deleteCompleted}>
      Clear completed
    </button>
  )
}

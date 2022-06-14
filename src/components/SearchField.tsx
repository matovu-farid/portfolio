import { useDispatch } from 'react-redux'
import { search } from '../app/projects'

interface Props  {
 disabled?: boolean
}
const SearchField = ({disabled}:Props) => {
  const dispatch = useDispatch()
  let timeoutId:NodeJS.Timeout |null = null;
  const onChange = (value: string) => {
    timeoutId && clearTimeout(timeoutId)
    timeoutId= setTimeout(()=>{
      dispatch(search(value))
    },1000)
   
  }

  return (
    <div>
      {
         (disabled)?'':
         <input type="text" onChange={(e)=>onChange(e.target.value)}
          className='rounded-lg mx-auto' placeholder='search a project' />
      }
    </div>
   
  )
}

export default SearchField
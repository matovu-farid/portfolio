import { useDispatch } from 'react-redux'
import { addSearchText, search } from '../app/features/projects'

interface Props  {
 disabled?: boolean,
 searchFunction: Function

}
const SearchField = ({disabled,searchFunction}:Props) => {
  const dispatch = useDispatch()
  let timeoutId:NodeJS.Timeout |null = null;
  const onChange = (value: string) => {
    timeoutId && clearTimeout(timeoutId)
    timeoutId= setTimeout(()=>{
      dispatch(searchFunction(value))
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
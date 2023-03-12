import './LoaderSpinner.css'
import { ReactComponent as Spinner } from '../../img/Spinner.svg'

export const LoaderSpinner = () => {
  return(
    <>
      <Spinner className='rotate' />
    </>
  )
}
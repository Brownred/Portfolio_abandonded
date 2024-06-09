import { ReactNode } from 'react';


// File Imports 
import {NavBar} from './NavBar';


/*****************************************************************************************/




const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=''>
      <NavBar />
      {children}
    </div>
  )
}

export default RootLayout
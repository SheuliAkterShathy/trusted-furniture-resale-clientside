
import { createContext } from 'react';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import router from './Routes/Routes/Routes';


export const ToggleMode = createContext();
function App() {
  const [toggle, setToggle] = useState
  (false)
  return (
    <div className="container mx-auto">
       <ToggleMode.Provider value={{toggle, setToggle}}>
          <div className={toggle ?`bg-gray-800 text-slate-400`: ``}>
         <RouterProvider router={router}></RouterProvider>
         <Toaster></Toaster>
         </div>
            </ToggleMode.Provider>
    </div>
  );
}

export default App;

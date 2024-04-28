
import React from 'react';
import { Tooltip } from 'react-tooltip';

const _step = () => {
    return (
        <>  
        <div>
            {
          user.photoURL ?       <img 
          
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Click me!"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(false)} 
          
          src={user.photoURL} className="w-10 sm:w-12 mt-2 rounded-full h-10 sm:h-12 border-2 border-orange-600" alt="" /> :<FaUser className="sm:text-3xl " 
          
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Click me!"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)}


           ></FaUser> 
}



<Tooltip
  id="my-tooltip"
  clickable={true}
  content={

<div >
        </div>
   </> );
};

export default _step;
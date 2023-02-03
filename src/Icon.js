import React from 'react';

const Icon = ({display, onClick}) => {
   return (
      <figure>
         <button onClick={onClick(display.Id)}><img src={display.ImageURLs.FullSize} alt={display.Title}/></button>
         <figcaption>{display.Title}</figcaption>
      </figure>
   )
}

export default Icon;

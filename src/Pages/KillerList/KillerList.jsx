import React, { useState, useEffect } from 'react';

import { getKillerList } from '../../services/api-calls';



const KillerList = (props) => {
  const [killers, setKillers] = useState([])

  useEffect(() => {
    getKillerList()
    .then(killerData => setKillers(killerData))
  }, [])

  return ( 
    <>
      <div>
        <h1>List of killers:</h1>
          {killers.map((killer => (
            <div className='char-icon'>
              <p>{killer.name}</p>
              <img 
                    style={{ width: "100px", height: "100px" }}
                    src={killer.icon.portrait} 
                    alt="killer-pic"
                  />
            </div>
          )))}
      </div>
    </>
   );
}
 
export default KillerList;
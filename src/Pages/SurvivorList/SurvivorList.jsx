import React, { useState, useEffect } from 'react';
import { getSurvivorList } from '../../services/api-calls';


const SurvivorList = (props) => {
  const [survivors, setSurvivors] = useState([])

  useEffect(() => {
    getSurvivorList()
    .then(survivorData => setSurvivors(survivorData))
  }, [])

  return ( 
    <>
      <div>
        <h1>List of Survivors:</h1>
          {survivors.map((survivor => (
            <div className='char-icon'>
              <p>{survivor.name}</p>
              <img 
                    style={{ width: "100px", height: "100px" }}
                    src={survivor.icon.portrait} 
                    alt="survivor-pic"
                  />
            </div>
          )))}
      </div>
    </>
   );
}
 
export default SurvivorList;
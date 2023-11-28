import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';

function AirlineForm() {
    const [airlineInput, setAirlineInput] = useState('')

    const dispatch = useDispatch()
    
    
    const addAirline = (e) => {
        e.preventDefault();
    
        dispatch({
          type: 'CREATE_AIRLINE',
          payload: airlineInput
        })
        setAirlineInput('')
      }

    return (
        <div>
        <form onSubmit={addAirline}>
        <input 
          value={airlineInput}
          onChange={(e) => setAirlineInput(e.target.value)}
          placeholder='Airline Name'
        />
      <button>Add Airline</button>
      </form>
      </div>
    )
}

export default AirlineForm;
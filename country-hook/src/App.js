import React, { useState } from 'react'
import { useField, useCountry } from './hooks' 

const Country = ({ country }) => {
  if (!country) {
    return null
  }

  if (!country.length === 0) {
    return (
      <div>
        not found...
      </div>
    )
  }

  const countryObject = country[0]
  console.log(countryObject)
  return (
    <div>
      <h3>{countryObject.name} </h3>
      <div>capital {countryObject.capital} </div>
      <div>population {countryObject.population}</div> 
      <img src={countryObject.flag} height='100' alt={`flag of ${countryObject.name}`}/>  
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App

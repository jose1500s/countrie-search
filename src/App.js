import { useEffect, useState } from 'react';
import './index.css';
import {Countrie} from './Countrie.js'
// import {Countries} from './Countries.js'

function App() {
  const [countries, setCountries] = useState([]) // datos dinaamicos, se actualizan en tiempo real
  const [countrie, setCountrie] = useState([]) // datos estaticos, no se actualizan en tiempo real 
  const [search, setSearch] = useState('') // datos de busqueda

  useEffect(() => { // use efect sirve para que se ejecute una vez el codigo  y no se ejecute cada vez que se renderiza el componente 
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then(json => {
      setCountrie(json)
    })
  },[]) 

  const handleChange = (e) => {
    setSearch(e.target.value)
    filter(e.target.value)
  }
  
  const filter = (filter) => {
    const filtered = countrie.filter((countrie) => {
      return countrie.name.common.toLowerCase().includes(filter.toLowerCase())
    })
    setCountries(filtered)
    // resetear el input cuando no hay nada en el input
    if(filter === ''){
      setCountries([])
    }
  }

  return (
    <div>
       <div className='text-center w-4/5 m-auto'>
        <h1 className='title'>Find Countries</h1>
        <form>

          <input className='mt-5 p-3 w-full text-center text-lg' type="text" placeholder='México...' onChange={handleChange} value={search}/>
        </form>
        <h2 className='text-5xl text-white mt-5 mb-5'>Countries:</h2>
            {// renderizado condicional si hay mas de 10 paises no se renderiza nada
              countries.length > 10  ?
              // cuando son mas de 10 resultados se renderiza este mensaje
              <h2 className='text-2xl text-white mt-5 mb-5'>Too many matches, specify another filter</h2> 
              // cuando solo es uno, se usa el componente para mostra UNO solo
              : countries.length === 1 ? 

              countries.map((countrie) => {
                return <Countrie key={countrie.cca3} countrie={countrie}/>
              } ) 
              // cuando son menos de 10 se usa el componente para mostrar MUCHOS
              : countries.length > 1 && countries.length < 10 ? 
              countries.map((countrie) => {
                return <Countrie key={countrie.cca3} countrie={countrie}/>
              } ) 
              : ''
            }
            
       </div>
    </div>
  );
}

export default App;

export const Countrie = ({countrie}) => { // exportacion NOMBRADA, es un poco mejor es una mejor practica que lo de hasta abajo
  const flagImg = countrie.flags.png
  return (
      <div className="flex justify-center items-center text-white text-2xl w-1/2 m-auto  max-[600px]:flex-col max-[600px]:w-full">

        <div className="w-1/2 max-[600px]:w-full">
          <img className="w-full m-auto" src={flagImg} alt="flag"/>
        </div>
        <div className="w-1/2 max-[600px]:w-full">
          <h2 className="text-4xl">{countrie.name.common}</h2>
          <p className="">Capital: {countrie.capital}</p>
          <p>Population: {countrie.population}</p>
          <p>Languages:</p>
          <ul>
            {// convertir el objeto en un array para poder usar el map
              Object.values(countrie.languages).map((language) => {
                return <li key={countrie.cca3}>{language}</li>
              })
            }
            </ul>
        </div>
      </div>
    )
}

// export default Countrie
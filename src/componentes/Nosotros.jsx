import React, { useEffect, useState } from 'react'

const Nosotros = () => {
  const datos =[
    {id:1,nombre:'Reactjs'},
    {id:2,nombre:'Vuejs'},
    {id:3,nombre:'Angularjs'}
  ]

  const [equipo,setEquipo] = useState(null)
  useEffect(()=>{
    console.log('useEffect')
    setEquipo(datos)
  },[])
  return (
    <div>Nosotros</div>
  )
}

export default Nosotros
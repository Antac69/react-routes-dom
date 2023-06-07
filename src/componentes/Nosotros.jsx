import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  // const datos =[
  //   {id:1,nombre:'Reactjs'},
  //   {id:2,nombre:'Vuejs'},
  //   {id:3,nombre:'Angularjs'}
  // ]

  const [equipo, setEquipo] = useState([]);
  useEffect(() => {
    // console.log('useEffect')
    obtenetDatos();
  }, []);

  const obtenetDatos = async () => {
    const url = "https://rickandmortyapi.com/api/character";
      const data = await fetch(url);
      const users = await data.json();
      setEquipo(users.results);
      console.log(users);
  };
  return (
    <>
      <div>Nosotros</div>
      <ul>
        {equipo.map(({ id, name, status }) => (
          <li key={id}>
            <Link to={`/nosotros/${id}`}>
              <strong>@{name}</strong> - {status}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nosotros;

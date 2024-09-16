import { useEffect, useState } from 'react';

export const usePokemon =  (name: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        res.json().then((data) => {
          setData(data);
          console.log(data);
        })
      }).catch((er) => {
      console.error(er);
    })
  }, [])


  return { data };

}


export default usePokemon;
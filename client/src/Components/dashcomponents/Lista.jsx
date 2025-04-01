import React from 'react'
import { Link } from 'react-router-dom';
import LigthBox from './LigthBox';


const Lista = ({ utenti, loading }) => {

    console.log("== &&&& ===0")
    console.log(utenti)

    if (loading) {
        return (
            <h1 className='text-center'>..Caricamento in corso</h1>
        )
    }
    return (
        <>

            {utenti.length ===0 ?
              <h2 className='text-center pt-3 pb-3'>Nessun utente trovato</h2>
            : utenti.map((data, index) => (
                <tr key={index}>
                <td><LigthBox immagine={data.file}/></td>
                <td className='pt-3'>{data.username}</td>
                <td className='pt-3'>{data.email}</td>
                <td className='pt-3'>{data.createdAt}</td>       
              </tr>

            ))}

        </>
    )
}

export default Lista

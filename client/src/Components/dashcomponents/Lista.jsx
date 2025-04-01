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
              <h2 className='text-center pt-3 pb-3'>Nessun componente trovato</h2>
            : utenti.map((data, index) => (
                <tr key={index}>
                <td><LigthBox immagine={data.file}/></td>
                <td className='pt-3'>{data.nome}</td>
                <td className='pt-3'>{data.categoria}</td>
                <td className='pt-3'>{data.condizione}</td>
                <td className='pt-3'>{data.marca}</td>
                <td className='pt-3'>{data.modello}</td>
                <td className='pt-3'>{data.versione}</td>
                <td className='pt-3'>{data.annoImmatricolazione}</td>
                <td className='pt-3'>
                  <p id="modello-componente" className="mb-0">SCAFFALE: {data.scaffale}</p>
                  <p id="modello-componente" className="mb-0 py-0">CAMPATA: {data.campata}</p>
                  <p id="modello-componente" className="mb-0">RIPIANO: {data.ripiano}</p>
                  <p id="modello-componente" className="mb-0">CASSETTA: {data.cassetta}</p>
                </td>
                <td className='pt-3'>{data.peso} Kg</td>
                <td className='pt-3'>
                  <Link to={`/modificacomponente/${data.unicoID}`} state={data.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-zoom-in'></i>
                  </Link>
                  <Link to={`/cancellacomponente/${data.unicoID}`} state={data.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-trash'></i>
                  </Link>

                </td>



              </tr>

            ))}

        </>
    )
}

export default Lista

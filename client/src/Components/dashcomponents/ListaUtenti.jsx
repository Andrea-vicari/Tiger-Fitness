
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Lista from './Lista'
import ScaricaListaCompCSV from './ScaricaListaCompCSV';
import Pagination from './Pagination'


function ListaUtenti() {


  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"

  const [utenti, setUtenti] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)
  const [utentiFiltrati, setUtentiFiltrati] = useState([])
  const [nomeFilter, setNomeFilter] = useState('');


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then(response => response.json())
      .then(utentiDalServer => {
        console.log("*****")
        console.log(utentiDalServer)
        setUtenti(utentiDalServer)
        setUtentiFiltrati(utentiDalServer)
      })
      .catch(err => {
        console.log(err)
        // update the error state
        setError(err)
      })
      .finally(() => {
        // wether we sucessfully get the users or not,
        // we update the loading state
        setLoading(false)
      })
  }, [])

  const resettaRicerca = () =>{
    setNomeFilter('')

  }

  const filteredUtenti = utenti.filter((utente) =>
    utente.username.toLowerCase().includes(nomeFilter.toLowerCase())
  )

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredUtenti.slice(indexOfFirstPost, indexOfLastPost);

  console.log("currentPosts")
  console.log(currentPosts)

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  var totaleUtenti = utenti.length
  console.log(totaleUtenti)

  return (
    <>
      <div className='container-fluid pt-1 mt-5 bg-login d-none d-sm-block'>
        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-2 text-white text-uppercase'>Elenco Utenti</h1>
        </div>
      </div>

      <div className={"container-fluid mb-0 py-3" + " " + bgType + " " + textType}>
        <h4 className="mx-2 mb-1" id='filtro_compon'>Filtra per nome utente</h4>
        <div className="row border-bottom">
        <div className="col-sm-6 py-2 pt-3">
        <input
          className="mb-2 mx-2 pb-1"
          type="text"
          placeholder="Inserisci il nome"
          value={nomeFilter}
          onChange={(e) => setNomeFilter(e.target.value)}
        />

        <button className='btn btn-outline-info py-1 rounded-0' onClick={()=>resettaRicerca()}>RESET</button>
        </div>
        <div className="col-sm-2 d-none d-sm-block">
        <div className='py-4'>
          <label>
          Utenti per pagina:
          <select value={postsPerPage}
            onChange={e => setPostsPerPage(e.target.value)}
            className='mx-3' name="compPerPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </label>
        </div>


        </div>

          <div className="col-sm-2 d-none d-sm-flex justify-content-end">
            <div className='pt-3'>

              <ScaricaListaCompCSV utenti={utenti}/>

            </div>
          </div>
          <div className="col-sm-2 d-none d-sm-flex justify-content-end">
            <div className='pt-3'>

              <Link to="/nuovocomponente" type="button" className="btn btn-outline-success rounded-0">
                <i className="bi bi-plus-circle mx-2">
                </i>Aggiungi Componente
              </Link>

            </div>
          </div>
        </div>

      </div>


          <section className={"py-3" + " " + bgType + " " + textType}>
        <div className="container-fluid mt-1 pt-0">
          <div className='table-responsive-lg mt-2'>
            <table className={"table table-striped table-hover" + " " + tableType}>
              <thead className='text-uppercase'>
                <tr>
                  <th scope="col">Immagine</th>
                  <th scope="col">Nome Utente</th>
                  <th scope="col">E-Mail</th>
                  <th scope="col">Registrato il:</th>
                </tr>
              </thead>
              <tbody>
                <Lista utenti={currentPosts} loading={loading} />
              </tbody>
            </table>
            <Pagination length={utenti.length} postsPerPage={postsPerPage} handlePagination={handlePagination} currentPage={currentPage} />
          </div>
        </div>

         </section>
    </>
  );
}

export default ListaUtenti;

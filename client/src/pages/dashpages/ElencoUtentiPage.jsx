import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaUtenti from '../../Components/dashcomponents/ListaUtenti';
import ScaricaListaCompCSV from '../../Components/dashcomponents/ScaricaListaCompCSV';

function ElencoUtentiPage() {
  return (
    <>
    <Navbar />
    <ListaUtenti />
    <Footer />
    </>
  )
}

export default ElencoUtentiPage


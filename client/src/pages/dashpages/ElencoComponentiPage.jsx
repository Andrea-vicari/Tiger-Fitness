import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaComponenti from '../../Components/dashcomponents/ListaUtenti';
import ScaricaListaCompCSV from '../../Components/dashcomponents/ScaricaListaCompCSV';

function ElencoComponentiPage() {
  return (
    <>
    <Navbar />
    <ListaUtenti />
    <Footer />
    </>
  )
}

export default ElencoComponentiPage


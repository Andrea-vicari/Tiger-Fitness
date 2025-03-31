const schedeAllenamento = require('../models/SchedaAllenamentoUtenteModel');

//creaSchedaAllenamento
//vediSchedeAllenamento


const vediSchedeAllenamento = async (req, res)=> {

    console.log("Req from /")
    console.log("Vedi tutti gli allenamenti")

    const tutteLeSchede = await schedeAllenamento.find({}).sort({createdAt: -1});
    console.log("AAAA")
    res.status(200).json(tutteLeSchede)

}

const creaSchedaAllenamento = async (req, res)=> {


    const {dataCreazione, allenamentiSingoli, user, status, dataChiusura, registered} = req.body

    try{
        const singolaScheda = await schedeAllenamento.create({dataCreazione, allenamentiSingoli, user, status, dataChiusura, registered})
        res.status(200).json(singolaScheda)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}


module.exports = {
    creaSchedaAllenamento,
    vediSchedeAllenamento
    //cancellaSingoloAllenamento,
    //aggiornaSingoloAllenamento,
    //vediSingoloAllenamento,
    //confermaAllenamento,
    //vediAllenamentiCompletati
}
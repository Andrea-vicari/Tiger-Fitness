
const allenamentiSingoli = require('../models/SingoloAllenamentoModel');


// Get all workouts: OK
const vediTuttiAllenamenti = async (req, res)=> {

    console.log("Req from /")
    console.log("Vedi tutti gli allenamenti")

    const tuttiAllenamenti = await allenamentiSingoli.find({}).sort({createdAt: -1});
    console.log("AAAA")
    res.status(200).json(tuttiAllenamenti)

}

// Create a NEW workout:
const creaSingoloAllenamento = async (req, res)=> {


    const {dataCreazione, nomeAllenamento, tipologia, difficoltà, ripetizioni, riposo, serie, carico, status, dataChiusura, registered} = req.body

    try{
        const singoloAllenamento = await allenamentiSingoli.create({dataCreazione, nomeAllenamento, tipologia, difficoltà, ripetizioni, riposo, serie, carico, status, dataChiusura, registered})
        res.status(200).json(singoloAllenamento)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}
/*
// Get a specific workout
const vediSingoloAllenamento = async (req, res)=> {
    console.log("======")
    console.log("Req from /id")
    console.log("View single workouts")

    const { id } = req.params;

    const singoloAllenamento = await SingoloAllenamento.find({"user":id});
   // const workout = await Workouts.findById(id);

    if(!singoloAllenamento){
      return res.status(400).json({error: "No WorkOut found"})
    }
    res.status(200).json(singoloAllenamento);
}

// Get a CLOSED workout
const getClosedWorkout = async (req, res)=> {
    console.log("***********")
    console.log("Req from /closed")

    const workout = await Workouts.find({"status":"CHIUSO"});
    // const workout = await Workouts.findById(id);

     if(!workout){
       return res.status(400).json({error: "No WorkOut found"})
     }
     res.status(200).json(workout);
}

// Confirm a WorkOut
const confirmWorkOut = async (req, res)=> {

    const {registered} = req.body

    const { id } = req.params;


    const workout = await Workouts.findOneAndUpdate({"_id":id},{
        $push: {
            registered: req.body,
          },
    })

    if(!workout){
        return res.status(400).json({error: "No WorkOut found"})
    }
    res.status(200).json(workout);

}

// Update a WorkOut
const updateWorkOut = async (req, res)=> {

    const {status, dataChiusura} = req.body

    const { id } = req.params;


    const workout = await Workouts.findOneAndUpdate({"_id":id},{
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error: "No WorkOut found"})
    }
    res.status(200).json(workout);

}




// Delete a WorkOut
const deleteWorkout = async (req, res)=> {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No WorkOut found"})
    }

    const workout = await Workouts.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error: "No WorkOut found"})
      }
      res.status(200).json(workout);
}

*/

module.exports = {
       creaSingoloAllenamento,
       vediTuttiAllenamenti
       //cancellaSingoloAllenamento,
       //aggiornaSingoloAllenamento,
       //vediSingoloAllenamento,
       //confermaAllenamento,
       //vediAllenamentiCompletati
}

/**
 *
 * const {creaSingoloAllenamento,
       vediTuttiAllenamenti,
       cancellaSingoloAllenamento,
       aggiornaSingoloAllenamento,
       vediSingoloAllenamento,
       confermaAllenamento,
       vediAllenamentiCompletati} = require('../controllers/singoloAllenamentoController');
 */
const express = require('express');

const {creaSingoloAllenamento,
       vediTuttiAllenamenti,
       cancellaSingoloAllenamento,
       aggiornaSingoloAllenamento,
       vediSingoloAllenamento,
       confermaAllenamento,
       vediAllenamentiCompletati} = require('../controllers/singoloAllenamentoController');


const router = express.Router();


router.get('/', vediTuttiAllenamenti);
// Post
router.post('/', creaSingoloAllenamento);

//router.get('/:id', vediSingoloAllenamento);

//router.get('/closed/closedWorks', vediAllenamentiCompletati);




// Delete
//router.delete('/:id', cancellaSingoloAllenamento);

// Update
//router.patch('/:id', aggiornaSingoloAllenamento);

// Confirm
//router.patch('/close/:id', confermaAllenamento);



module.exports = router;
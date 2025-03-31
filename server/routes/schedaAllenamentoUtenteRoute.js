const express = require('express');

const {creaSchedaAllenamento,
       vediSchedeAllenamento,
       cancellaSingoloAllenamento,
       aggiornaSingoloAllenamento,
       vediSingoloAllenamento,
       confermaAllenamento,
       vediAllenamentiCompletati} = require('../controllers/schedaAllenamentoUtenteController');


const router = express.Router();


router.get('/', vediSchedeAllenamento);
// Post
router.post('/', creaSchedaAllenamento);

//router.get('/:id', vediSingoloAllenamento);

//router.get('/closed/closedWorks', vediAllenamentiCompletati);




// Delete
//router.delete('/:id', cancellaSingoloAllenamento);

// Update
//router.patch('/:id', aggiornaSingoloAllenamento);

// Confirm
//router.patch('/close/:id', confermaAllenamento);



module.exports = router;
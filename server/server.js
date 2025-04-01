const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path');


app.use(express.json());

//app.use(express.static('public'))

//app.use(express.static(path.join(process.cwd(), 'public')))
//app.use('public', express.static(path.join(__dirname,'public')));

// USA questo per far comparire le immagini da /public/images
app.use(express.static(path.join(__dirname, 'public')));



console.log(process.cwd())

app.use(cors(
    {
        // Use this in production (DO NOT PUT FINAL SLASH!!) //
        //origin: ["https://pulsefit-client.vercel.app"],
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET", "PUT", "PATCH"],
        credentials: true

    }
));

app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })

const singoloAllenamentoRoute = require('./routes/singoloAllenamentoRoute');
app.use('/api/singolo-allenamento', singoloAllenamentoRoute)
const schedaAllenamentoUtenteRoute = require('./routes/schedaAllenamentoUtenteRoute');
app.use('/api/scheda-allenamento-utente', schedaAllenamentoUtenteRoute)
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes)

/*

const bookingsRoutes = require('./routes/bookings');
// const imagesRoutes = require('./routes/images');

app.use(workoutsRoutes)

app.use(bookingsRoutes)
// app.use(imagesRoutes)



app.use('/api/bookings', bookingsRoutes)
// app.use('/api/images', imagesRoutes)
*/
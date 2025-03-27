const mongoose = require('mongoose')

const singoloAllenamentoSchema = new mongoose.Schema({
    dataCreazione:{
        type: String,
        required: false
    },

    nomeAllenamento:{
        type: String,
        required: false
    },
    tipologia:{
        type: String,
        required: false
    },
    difficoltà:{
        type: String,
        required: false
    },
    ripetizioni:{
        type: Number,
        required: false
    },
    riposo:{
        type: Number,
        required: false
    },
    serie:{
        type: Number,
        required: false
    },
    carico:{
        type: Number,
        required: false
    },
    status:{
        type: String,
        default:"APERTO",
        required: false
    },
    dataChiusura:{
        type: String,
        required: false
    },

    registered:{
        type: Array,
        default:[],
        required: false
    }


},{ timestamps:true })


module.exports = mongoose.model("SingoloAllenamentoModel", singoloAllenamentoSchema);
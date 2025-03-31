const mongoose = require('mongoose')

const SchedaAllenamentoUtenteSchema  = new mongoose.Schema({
    dataCreazione:{
        type: String,
        required: false
    },
    allenamentiSingoli:{
        type: Array,
        default:[],
        required: false
    },
    user:{
        type: String,
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


module.exports = mongoose.model("SchedaAllenamentoUtenteModel", SchedaAllenamentoUtenteSchema);
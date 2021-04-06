mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    patientId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
    doctorId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
    clinicId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
    patientName: {
        type: String,
        requried: true,
    },
    doctorName: {
        type: String,
        requried: true,
    },
    sexAndAge: {
        type : String,
        required : true
    },
    contactNo: {
        type : String,
        required : true
    },
    date: {
        type: String,
        requried: true,
    },
    slot: {
        type: String,
        requried: true,
    },
    status: {
        type: String,
        enum: ['active', 'confirmed', 'cancelled','pushed'],
        default: 'active'
    },
    type: {
        type: String,
        enum: ['video', 'audio', 'clinic'],
        default: 'clinic'
    }
});

const appointments = mongoose.model('Appointments',appointmentSchema);
module.exports = appointments;
const mongoose = require('mongoose');


const patientSettingSchema = mongoose.Schema({
    patientId:{
        type: String,
	    unique: true,
        requried: [true, 'Please provide valid id']
    },

    reminder : {
        before :{
            sanitaryPads : {
                sanitaryPads : Boolean,
                pads : Boolean,
                tampons : Boolean,
                cloth : Boolean
            },
            periodAlert : {
                periodAlert : Boolean,
                remindMeAt : Date,
                remindMeBefore : Number,
                reminderMessage : String
            }
        },
        after : {
            periodEnd : {
                periodEnd : Boolean,
                reminderMessage : String
            },
            // ovulation : {

            // }
        },
        pills : {
            // contraception : {

            // }
            pills : {
            fromTime : Date,
            tillTime : Date,
            noOfPillsPerDay : Number,
            stages : String,
            nameOfPill : String,
            reminderMessage : String
            }
        }
    },
    mode : {
        partnerMode : {
            partnerMode : Boolean,
            text : String
        },
        pregnancyMode : {
            notPregnant : Boolean,
            noLongerPregnant : Boolean,
            babyBorn : Boolean
        }
    },
    Date : {
        type : Date,
        default : Date.now
    },
    history : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'patientSettingHistory'
    }]
});

const patientSettingHistorySchema = new mongoose.Schema({
    input : {
        cycleLength : String,
        periodLength : String,
        ovulationLength : String,
        pmsLength : String,
        sanitaryUsed : String
    },
    reminder : {
        before :{
            sanitaryPads : {
                sanitaryPads : Boolean,
                pads : Boolean,
                tampons : Boolean,
                cloth : Boolean
            },
            periodAlert : {
                periodAlert : Boolean,
                remindMeAt : Date,
                remindMeBefore : Number, 
                reminderMessage : String
            }
        },
        after : {
            periodEnd : {
                periodEnd : Boolean,
                reminderMessage : String
            },
            ovulation : {
                periodAlert : Boolean,
                remindMeAt : Date,
                remindMeBefore : Number,
                reminderMessage : String
            }
        },
        pills : {
            pills : {
            fromTime : Date,
            tillTime : Date,
            noOfPillsPerDay : Number,
            stages : String,
            nameOfPill : String,
            reminderMessage : String
            }
        }
    },
    mode : {
        partnerMode : {
            partnerMode : Boolean,
            text : String
        },
        pregnancyMode : {
            notPregnant : String,
            noLongerPregnant : String,
            babyBorn : Boolean
        }
    },
    Date : {
        type : Date
    }
});

const inputSettingSchema = mongoose.Schema({
    patientId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
        cycleLength : Number,
        periodLength : Number,
        ovulationLength : Number,
        pmsLength : Number,
        sanitaryUsed : String,
        height : String,
        weight : String,

});

const periodAlertSettingSchema = mongoose.Schema({
    patientId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
    periodAlert : Boolean,
    remindMeAt : String,
    fromWhenToStart : Number, 
    reminderMessage : String

});

const ovulationSettingSchema = mongoose.Schema({
    patientId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
    ovulation : Boolean,
    remindMeAt : String,
    fromWhenToStart : Number, 
    reminderMessage : String

});

const periodEndSettingSchema = mongoose.Schema({
    patientId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
    periodEnd : {type: Boolean, default: false},
    reminderMessage : String
});



const padSettingSchema = mongoose.Schema({
    patientId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
    sanitaryPads : {
        pads: {type: Boolean, default: false},
        once: {type: Boolean, default: false},
        twice: {type: Boolean, default: false},
        thrice: {type: Boolean, default: false},
        fourTimes: {type: Boolean, default: false},
        fifthHour: {type: Boolean, default: false},
        twoHour: {type: Boolean, default: false},
    },
    tampons : {
        tampons: {type: Boolean, default: false},
        once: {type: Boolean, default: false},
        twice: {type: Boolean, default: false},
        thrice: {type: Boolean, default: false},
        fourTimes: {type: Boolean, default: false},
        fifthHour: {type: Boolean, default: false},
        twoHour: {type: Boolean, default: false},
    },
    cloth : {
        cloth: {type: Boolean, default: false},
        once: {type: Boolean, default: false},
        twice: {type: Boolean, default: false},
        thrice: {type: Boolean, default: false},
        fourTimes: {type: Boolean, default: false},
        fifthHour: {type: Boolean, default: false},
        twoHour: {type: Boolean, default: false},
    },

});

const pillsSettingSchema = mongoose.Schema({
    patientId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
    pills : Boolean,
    from : Date,
    till : Date,
    noOfPillsPerDay : Number,
    stages : String,
    nameOfPill : String,
    reminderMessage : String

});

const contraceptionSettingSchema = mongoose.Schema({
    patientId: {
        type: String,
        requried: [true, 'Please provide valid id']
    },
    contraception : {type: Boolean, default: false}
    

});

const inputSetting = mongoose.model('inputSetting', inputSettingSchema);
const padSetting = mongoose.model('padSetting', padSettingSchema);
const periodAlertSetting = mongoose.model('periodAlertSetting', periodAlertSettingSchema);
const pillsSetting = mongoose.model('pillsSetting', pillsSettingSchema);
const contraceptionSetting = mongoose.model('contraceptionSettting', contraceptionSettingSchema);
const periodEndSetting = mongoose.model('periodEndSetting', periodEndSettingSchema);
const ovulationSetting = mongoose.model('ovulationSetting', ovulationSettingSchema);
const patientSetting = mongoose.model('patientSetting', patientSettingSchema);
const patientSettingHistory = mongoose.model('patientSettingHistory', patientSettingHistorySchema);
module.exports = {patientSetting, patientSettingHistory, inputSetting, padSetting, periodAlertSetting, periodEndSetting, ovulationSetting, pillsSetting, contraceptionSetting};
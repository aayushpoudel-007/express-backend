const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fName:{

        type: String,

        required: true,

    },

    lName:{

        type: String,

        required: true,

    },

    email:{

        type: String,

        required: true,

    },

    password:{

        type: String,

        required: true,

    },

});

const user = mongoose.model("user", userSchema);
module.exports = user;
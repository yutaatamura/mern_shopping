const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema 
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//Create model from above schema, using mongoose's model method

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
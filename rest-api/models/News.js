const { Schema, model } = require('mongoose')

const newsSchema = new Schema({
    time: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
})

module.exports = model('News', newsSchema)
const { Schema, model } = require('mongoose')

const blogSchema = new Schema({
    time: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    img: String,
    about: {
        type: String,
        required: true
    }
})

module.exports = model('Blog', blogSchema)
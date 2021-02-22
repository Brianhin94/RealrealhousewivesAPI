require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_API, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.once('open', () =>
    console.log(`🔗 Connected to db: ${mongoose.connection.name}`)
)
mongoose.connection.on('error', err => console.log('🔥 Connection failed!', err))

module.exports.Housewife = require('./housewife');
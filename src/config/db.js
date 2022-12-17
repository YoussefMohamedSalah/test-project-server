const mongoose = require('mongoose')
mongoose.set("strictQuery", false);


const connectToDataBase = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Now Connected : ${connect.connection.host}`.yellow.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectToDataBase
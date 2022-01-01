const mongoose = require('mongoose');

const connectDatbase =() => {
 mongoose.connect(process.env.DB_LOCAL_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(con =>{
     console.log(`Mongo db database connected with HOST: ${con.connection.host}`)
 })
}


module.exports = connectDatbase;

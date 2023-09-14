const dotenv = require('dotenv');
dotenv.config();
const app= require('./app');
const Producer = require('./message-brokers/brokerConnection');
const connectDB= require('./config/connectWithDataBase');


const port=process.env.PORT || 5000;



app.listen(port, () => {
    connectDB();
    Producer.createChannel();
    console.log(`🚀 Server is running on port ${port}`)
 });

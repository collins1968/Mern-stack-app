const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected  `);
    } catch (error) {
        console.log(error);
        process.exit(1);

        
    }
}

module.exports = connectDB

// use this function in server.js to connect to the database
/* const startServer = async () => {
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        }); 

    } catch (error) {
        console.log(error);
    }
}

startServer();
*/
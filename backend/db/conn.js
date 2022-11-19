const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    // await mongoose.connect("mongodb://localhost:27017/ecommerce");
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database is working")
}

main().catch((err) => console.log(err));

module.exports = mongoose;
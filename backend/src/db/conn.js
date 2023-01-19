import mongoose from "mongoose"
import * as dotenv from "dotenv";

dotenv.config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

async function main() {
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.krpu0vv.mongodb.net/?retryWrites=true&w=majority`
        )

        console.log("Connected to MongoDB!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

export default main
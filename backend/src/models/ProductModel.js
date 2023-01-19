import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        minLength: 3
    },
    category: {
        type: String,
        minLength: 3
    },
    price_BRL: {
        type: Number,
        min: 1,
    },
    price_USD: {
        type: Number,
        required: false
    },
    price_EUR: {
        type: Number,
        required: false
    },
}, { timestamps: true })

export const Product = mongoose.model("Product", productSchema)


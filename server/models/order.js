import { Schema, model } from "mongoose";


constorderSchema = new Schema({
    orderId: String,
    tableNumber: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [
        {
            name: String,
            price: Number,
            quantity: Number

        }
    ]
    
})
import { Schema, model } from "mongoose";


const orderSchema = new Schema({
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
const order = model('order', orderSchema);

export default order;


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
const __dirname = path.resolve();

import User from './models/User.js';
import FoodItem from './models/fooditem.js';
import Table from './models/table.js';
import Order from './models/order.js';

const app = express();  //middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('connected to MongoDB');
})

//api routes starts hear

app.post('/Signup', async (req, res) => {
    const { name, phone, email, password, role } = req.body;

    //validation to check if all fields are filled are start here

    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');


    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(', ')} are required`

        })
    }
    //validation to check if all fields are filled ends here

    //validation to check if email already exist starts here
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"

        })
    }
    //validation to check  if email already exist here ends here

    //validation to check if phone already exist starts here
    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return req.json({
            success: false,
            message: "phone already exists"
        })
    }


    const user = new User({
        name: name,
        phone: phone,
        email: email,
        password: password,
        role: role
    })


    const savedUser = await user.save();
    res.json({
        success: true,
        message: "User created successfully",
        data: savedUser
    })
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.ison({
            success: false,
            message: "Email and password are required"
        })
    }
    const existingUser = await User.findOne({ email: email, password: password });

    if (existingUser) {
        return res.json({
            success: true,
            message: "Login successfully",
            data: existingUser
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})

app.post("/createFoodItem", async (req, res) => {
    const { title, description, imgUrl, price, category } = req.body;


    const foodItem = new FoodItem({
        title: title,
        description: description,
        imgUrl: imgUrl,
        price: price,
        category: category
    })

    const savedFoodItem = await foodItem.save();


    res.json({
        success: true,
        message: "Food Item created successfully",
        data: savedFoodItem
    })

})
//http://localhost:5000/FoodItemsByCategory?category=pizza
app.get("/fooditemsByCategory", async (req, res) => {
    const { category } = req.query;

    const fooditem = await FoodItem.find({
        category: category
    })
    res.json({
        success: true,
        message: "Food items feached successfully",
        data: fooditem
    })
})

//http://localhost:5000/FoodItems?title=pizza

app.get("/fooditems", async (req, res) => {
    const { title } = req.query;

    const fooditems = await FoodItem.find({
        title: { $regex: title, $options: 'i' }

    })
    res.json({
        success: true,
        message: "Food Items fetched successfully",
        data: fooditems

    })
})

app.get("/allfooditems", async (req, res) => {
     const fooditems = await FoodItem.find()
     
    res.json({
        success: true,
        message: "Food Items fetched successfully",
        data: fooditems

    })
})

app.post("/createTable", async (req, res) => {
    const { tableNumber } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });
    if (existingTable) {
        return res.json({
            success: false,
            message: "Table already exists"
        })
    }

    const table = new Table({
        tableNumber: tableNumber,
        occupied: false
    })

    const savedTable = await table.save();

    res.json({
        success: true,
        message: "Table created  successfully",
        data: savedTable
    })

})

app.post("/bookTable", async (req, res) => {
    const { tableNumber, userId } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });
    if (!existingTable && existingTable.occupied) {
        return res.json({
            success: false,
            message: "Table already occupied"
        })

    }
    if (existingTable) {
        existingTable.occupied = true;
        existingTable.occupiedBy = userId;
        await existingTable.save();
    }
    res.json({
        success: true,
        message: "Table booked successfully",
        data: existingTable
    })
})
app.post("/unbookTable", async (req, res) => {
    const { tableNumber } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });

    if (existingTable) {
        existingTable.occupied = false;
        existingTable.occupiedBy = null;
        await existingTable.save();
    }

    res.json({
        success: true,
        message: "Table unbooked successfully",

    })
})

app.get("/availableTables", async (req, res) => {
    const availableTables = await Table.find({ occupied: false });

    res.json({
        success: true,
        message: "Available tables fetched successfully",
        data: availableTables

    })
})

app.post("/orderFoodItems", async (req, res) => {
    const { userId, tableNumber, items } = req.body
    const totalOrders = await Order.countDocuments();
    const orderId = totalOrders + 1;


    const order = new Order({
        orderId: orderId,
        userId: userId,
        tableNumber: tableNumber,
        items: items

    })
    const savedOrder = await order.save();

    res.json({
        success: true,
        message: "order placed successfully",
        data: savedOrder
    })

})
app.get("/Order", async (req, res) => {
    const { orderId } = req.query;

    const order = await Order.findOne({ orderId: orderId });

    res.json({
        success: true,
        message: "Order featched successfully",
        data: order
    })
})

app.get("/ordersByUserId", async (req, res) => {
    const { userId } = req.query;

    const orders = await Order.find({ userId: userId });

    res.json({
        success: true,
        message: "orders fetched successfully",
        data: orders
    })
});
//api routes end here
//send request to frontend
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
});


app.listen(5000, () => {
    console.log(`server is running on port ${PORT}`);

})
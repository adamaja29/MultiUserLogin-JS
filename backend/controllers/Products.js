import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";

export const getProducts = async(req, res) => {
    try {
        let response;
        if(req.role === "admin") {
            response = await Product.findAll({
                attributes: ['uuid', 'name', 'price'],
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }else{
            response = await Product.findAll({
                attributes: ['uuid', 'name', 'price'],
                where: {
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProductsById = (req, res) => {
    
}

export const createProducts = async(req, res) => {
    const {name, price} = req.body;
    try {
        await Product.create({
            name: name,
            price: price,
            userId: req.userId
        });
        res.status(201).json({ msg: "Product created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProducts = (req, res) => {
    
}

export const deleteProducts = (req, res) => {
    
}

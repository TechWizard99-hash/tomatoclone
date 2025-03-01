import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    let image_filename = req.file.filename;

    let food = new foodModel({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: image_filename,
      category: req.body.category
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get list of all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find();
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try{
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  }
  catch(error){
    console.log(error);
    res.json({ success: false, message: "Server Error" });
  }
  }

  //all food list
  // const listfood=async(req,res)=>{

  // }

export { addFood, listFood ,removeFood};



const Wish = require('../models/wish');

//list all items
exports.list = async(req, res) =>{
    try{
    const wish = await Wish.find({});
    res.json(wish);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};
// find
exports.show = async(req, res, next) =>{

    try{
        const wish = await Wish.findOne({id: req.params.id});
        if(!wish){
            res.status(404).json({message: "Item not found"});
        }
        res.json(wish);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

//add
exports.add = async(req, res) =>{
    const wish = new Wish(req.body);

    try{
        await wish.save();
        res.json({message: "New book wish added"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const wish = await Wish.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Wished book updated"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const wish = await Wish.findOneAndDelete({id: req.params.id});
        res.json({message: " Wish book deleted"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Book not found"});
        next();
    }
};
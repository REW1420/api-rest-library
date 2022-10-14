const RGTS = require('../models/registry');

//list all items
exports.list = async(req, res) =>{
    try{
    const registry = await RGTS.find({});
    res.json(registry);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const registry = await RGTS.findOne({id: req.params.id});
        if(!registry){
            res.status(404).json({message: "Registry not found"});
        }
        res.json(registry);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

exports.add = async(req, res) =>{
    const registry = new RGTS(req.body);

    try{
        await registry.save();
        res.json({message: "New registration done"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const registry = await RGTS.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Registry updated"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const books = await RGTS.findOneAndDelete({id: req.params.id});
        res.json({message: "Book deleted"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};
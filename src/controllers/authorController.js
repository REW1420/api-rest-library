const Author = require('../models/author');


//list all items
exports.list = async(req, res) =>{
    try{
    const author = await Author.find({});
    res.json(author);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const author = await Author.findOne({id: req.params.id});
        if(!author){
            res.status(404).json({message: "Author not found"});
        }
        res.json(author);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

exports.add = async(req, res) =>{
    const author = new Author(req.body);

    try{
        await author.save();
        res.json({message: "New author added"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const author = await Author.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Atuhor updated"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const author = await Author.findOneAndDelete({id: req.params.id});
        res.json({message: "Atuhor deleted"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Author not found"});
        next();
    }
};
const Book = require('../models/books');

//list all items
exports.list = async(req, res) =>{
    try{
    const books = await Book.find({});
    res.json(books);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const books = await Book.findOne({id: req.params.id});
        if(!books){
            res.status(404).json({message: "Item not found"});
        }
        res.json(books);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

exports.add = async(req, res) =>{
    const books = new Book(req.body);

    try{
        await books.save();
        res.json({message: "New book added"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const books = await Book.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Book updated"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const books = await Book.findOneAndDelete({id: req.params.id});
        res.json({message: "Book deleted"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "El Cliente no existe"});
        next();
    }
};
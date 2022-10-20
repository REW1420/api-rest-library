const { Router } = require('express');
const router = Router();
const bookController = require('../controllers/BooksController');
const RegistryController = require('../controllers/registryController');
const wishController = require('../controllers/wishController')
const authorController = require('../controllers/authorController')

//routes
router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API is working"
    }
    res.json(data);
});

//book
router.get('/api/book', bookController.list);

router.get('/api/book/:_id', bookController.show);

router.post('/api/book', bookController.add);

router.put('/api/book/:_id', bookController.update);

router.delete('/api/book/:_id', bookController.delete);

//registry
router.get('/api/registry', RegistryController.list);

router.get('/api/registry:_id', RegistryController.show);

router.post('/api/registry', RegistryController.add);

router.put('/api/registry/:_id', RegistryController.update);

router.delete('/api/registry/:_id', RegistryController.delete);

//wish book
router.get('/api/wish', wishController.list);

router.get('/api/wish/:_id', wishController.show);

router.post('/api/wish', wishController.add);

router.put('/api/wish/:_id', wishController.update);

router.delete('/api/wish/:_id', wishController.delete);

//author
router.get('/api/author', authorController.list);

router.get('/api/author/:_id', authorController.show);

router.post('/api/author', authorController.add);

router.put('/api/author/:_id', authorController.update);

router.delete('/api/author/:_id', authorController.delete);

module.exports = router;

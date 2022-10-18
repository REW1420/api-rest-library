const { Router } = require('express');
const router = Router();
const bookController = require('../controllers/BooksController');
const RegistryController = require('../controllers/registryController');
const wishController = require('../controllers/wishController')

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

router.get('/api/book/:id', bookController.show);

router.post('/api/book', bookController.add);

router.put('/api/book/:id', bookController.update);

router.delete('/api/book/:id', bookController.delete);

//registry
router.get('/api/registry', RegistryController.list);

router.get('/api/registry:id', RegistryController.show);

router.post('/api/registry', RegistryController.add);

router.put('/api/registry/:id', RegistryController.update);

router.delete('/api/registry/:id', RegistryController.delete);

//wish book
router.get('/api/wish', wishController.list);

router.get('/api/wish/:id', wishController.show);

router.post('/api/wish', wishController.add);

router.put('/api/wish/:id', wishController.update);

router.delete('/api/wish/:id', wishController.delete);


module.exports = router;

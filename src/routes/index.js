const { Router } = require('express');
const router = Router();
const bookController = require('../controllers/BooksController');
const RegistryController = require('../controllers/registryController');

//routes
router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API is working"
    }
    res.json(data);
});

//book
router.get('/api/list', bookController.list);

router.get('/api/list/:id', bookController.show);

router.post('/api/list', bookController.add);

router.put('/api/list/:id', bookController.update);

router.delete('/api/list/:id', bookController.delete);

//registry
router.get('/api/registry', RegistryController.list);

router.get('/api/registry:id', RegistryController.show);

router.post('/api/registry', RegistryController.add);

router.put('/api/registry/:id', RegistryController.update);

router.delete('/api/registry/:id', RegistryController.delete);


module.exports = router;
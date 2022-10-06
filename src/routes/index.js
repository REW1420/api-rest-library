const { Router } = require('express');
const router = Router();
const bookController = require('../controllers/BooksController');

//routes
router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API is working"
    }
    res.json(data);
});

router.get('/api/list', bookController.list);

router.get('/api/list/:id', bookController.show);

router.post('/api/list', bookController.add);

router.put('/api/list/:id', bookController.update);

router.delete('/api/list/:id', bookController.delete);


module.exports = router;

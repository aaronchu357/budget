const express = require('express');
const router = express.Router();

// Load Book model
const Item = require('../../models/Item');

// CRUD
// get all items
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noitemsfound: 'No Items found' }));
});
// get one specific item
router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json({ noitemfound: 'No Item found'}));
});
// post to db
router.post('/', (req, res) => {
  Item.create(req.body)
    .then(item => res.json({ msg: 'Item added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this item' }));
});
// update specific item in db
router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then(item => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});
// delete specific item
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, req.body)
    .then(item => res.json({ mgs: 'Item entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a item' }));
});

module.exports = router;
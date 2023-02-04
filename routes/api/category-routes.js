const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: Product
    })
    
    res.json(categories)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product
    })
  
    if (!category) return res.status(404).json({ message: 'Category not found' })
  
    res.json(category)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body)

    res.json(category)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const result = await Category.update(req.body, {
      where: { id: req.params.id }
    })
  
    res.json(result)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const result = await Category.destroy({
      where: { id: req.params.id }
    })

    res.json(result)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

module.exports = router;

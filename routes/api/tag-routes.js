const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({ include: Product })
    
    res.json(tags)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, { include: Product })

    if (!tag) return res.status(404).json({ message: 'Tag not found' })

    res.json(tag)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body)

    res.json(tag)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const result = await Tag.update(req.body, {
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
  // delete on tag by its `id` value
  try {
    const result = await Tag.destroy({
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

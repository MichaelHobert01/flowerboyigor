const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const categoryData = req.body;
    const category = await Category.create(categoryData);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = req.body;
    const [rowsAffected, [updatedCategory]] = await Category.update(categoryData, {
      where: { id: req.params.id },
      returning: true
    });
    if (rowsAffected !== 1) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(updatedCategory);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const rowsAffected = await Category.destroy({
      where: { id: req.params.id }
    });
    if (rowsAffected !== 1) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

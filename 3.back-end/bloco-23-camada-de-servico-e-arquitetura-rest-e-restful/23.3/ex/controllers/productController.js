const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
  try {
    const products = await ProductModel.getAll();

    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: `Erro ao efetuar GET\n ${err}` })
  }
});

router.get('/:id', async (req, res, _next) => {
  try {
    const product = await ProductModel.getById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.error('Erro ao efetuar GET/:id', err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, brand } = req.body;
    if (!name || name === '') {
      return res.status(400).json({ message: 'campo "name" é obrigatório' });
    }

    if (!brand || brand === '') {
      return res.status(400).json({ message: 'campo "brand" é obrigatório' });
    }
    
    const newProduct = await ProductModel.add(name, brand);

    return res.status(201).json(newProduct);
  } catch (err) {
    console.error('Erro ao efetuar POST', err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;
    const product = await ProductModel.update(req.params.id, name, brand);

    return res.status(200).json(product);
  } catch (err) {
    console.error('Erro ao efetuar PUT', err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await ProductModel.exclude(req.params.id);

    return res.status(204).end();
  } catch (err) {
    console.error('Erro ao efetuar DELETE', err);
  }
});

module.exports = router;
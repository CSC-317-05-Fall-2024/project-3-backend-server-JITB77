import express from 'express';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from '../data/restaurants.js';

const router = express.Router();

// GET all restaurants
router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.json(restaurants); // Respond with JSON data
});

// GET a restaurant by ID
router.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = getRestaurant(id);
    if (restaurant) {
        res.json(restaurant); // Respond with JSON data
    } else {
        res.status(404).send('Restaurant not found');
    }
});

// POST a new restaurant
router.post('/restaurants', (req, res) => {
    const { name, address, phone, image } = req.body;
    const newRestaurant = { name, address, phone, image };

    createRestaurant(newRestaurant); // Assuming this function adds the restaurant to the data source
    res.status(201).json(newRestaurant); // Respond with the created restaurant
});

// DELETE a restaurant by ID
router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = deleteRestaurant(id); // Assuming this function deletes the restaurant from the data source

    if (result) {
        res.status(204).send(); // No Content
    } else {
        res.status(404).send('Restaurant not found');
    }
});

export default router;

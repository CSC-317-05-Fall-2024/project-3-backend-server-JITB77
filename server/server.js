import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import apiRouter from './routes/api.js'; // Import API router
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from './data/restaurants.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 

// API router
app.use('/api', apiRouter);

// Route for the homepage 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the attractions page
app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

// Route for the restaurants form page
app.get('/restaurantsform', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'restaurantform.html'));
});

// Route for the restaurants page
app.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.render('restaurants', { restaurantData: restaurants });  
});

// Route for the restaurant by ID page
app.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const restaurant = getRestaurant(id); 
    if (restaurant) {
        res.render('restaurant-details', { restaurant });
    } else {
        res.status(404).send('Restaurant not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
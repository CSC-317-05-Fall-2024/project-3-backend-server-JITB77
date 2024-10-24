// Fill this in
let restaurantData = [
    {
        "id": 0,
        "name": "Wipeout Bar & Grill",
        "address": "Pier 39, San Francisco, CA 94133",
        "phone": "+1 415-964-4700",
        "image": "/images/rest1.jpg"
      },
      {
        "id": 1,
        "name": "DJ Sushi",
        "address": "450 Broadway, San Francisco, CA 94133-4515",
        "phone": "+1 415-445-2585",
        "image": "/images/rest2.jpg"
      },
      {
        "id": 2,
        "name": "Fog Harbor Fish House",
        "address": "39 Pier, San Francisco, CA 94133-1006",
        "phone": "+1 415-969-2010",
        "image": "/images/rest3.jpg"
      },
      {
        "id": 3,
        "name": "Mersea Restaurant & Bar",
        "address": "699 Avenue of the Palms Treasure Island, San Francisco, CA 94130",
        "phone": "+1 415-999-9836",
        "image": "/images/rest4.jpg"
      },
      {
        "id": 4,
        "name": "Waterbar",
        "address": "399 The Embarcadero, San Francisco, CA 94105-1265",
        "phone": "+1 415-284-9922",
        "image": "/images/rest5.jpg"
      },
      {
        "id": 5,
        "name": "Fogo de Chão",
        "address": "201 S. 3rd St Suite 100, San Francisco, CA 94103",
        "phone": "+1 415-427-0004",
        "image": "/images/rest6.jpg"
      }
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const restaurant = { id: getNextId(), ...newRestaurant }; // Create new restaurant with unique id
    restaurantData.push(restaurant); // Add to restaurantData array
    return restaurant; // Return the newly created restaurant
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const initialLength = restaurantData.length; // Store the initial length of the array
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id); // Filter out the restaurant to be deleted
    return restaurantData.length < initialLength; // Return true if a restaurant was deleted, false otherwise

};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
export default restaurantData;
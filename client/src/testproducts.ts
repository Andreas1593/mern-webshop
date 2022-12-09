// Fetch a few products to be displayed
const product1 = {
  id: 31,
  name: 'Diamond Ring',
  // prettier-ignore
  price: 289.00,
  brand: 'Gucci',
  description: 'A beautiful diamond ring',
  ratings: [
    { id: 1, description: 'Best Ring ever', value: 4 },
    { id: 2, description: 'Worst Ring ever', value: 1 },
  ],
  images: [
    'https://placekitten.com/300/300',
    'https://placekitten.com/301/300',
    'https://placekitten.com/300/301',
  ],
  category: 'rings',
};
const product2 = {
  id: 32,
  name: 'Necklace Gold',
  price: 99.99,
  brand: 'Gucci',
  description: 'Gucci Gang',
  ratings: [],
  images: [
    'https://placekitten.com/400/300',
    'https://placekitten.com/400/400',
  ],
  category: 'necklaces',
};
const product3 = {
  id: 33,
  name: 'Figure',
  // prettier-ignore
  price: 49.50,
  brand: 'Disney',
  description: 'A must-have for every fan',
  ratings: [],
  images: [
    'https://placekitten.com/500/300',
    'https://placekitten.com/500/400',
  ],
  category: 'other',
};

export const products = [product1, product2, product3];

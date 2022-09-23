import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Game Of Thrones',
      slug: 'got',
      category: 'Books',
      image: '/images/img1.png',
      price: '20',
      countInStock: '10',
      rating: '4',
      numReviews: 4,
      description: 'Good Quality Game of Thrones Book',
    },
    {
      name: 'The Lord Of The Rings',
      slug: 'lotr',
      category: 'Books',
      image: '/images/lotr.jpg',
      price: '20',
      countInStock: '10',
      rating: '5',
      numReviews: 5,
      description: 'Good Quality Lord Of The Rings Book',
    },
    {
      name: 'Harry Potter & The Deadly Hallows',
      slug: 'hp7',
      category: 'Books',
      image: '/images/hp.jpg',
      price: '20',
      countInStock: '10',
      rating: '5',
      numReviews: 0,
      description: 'Good Quality Harry Potter Book',
    },
    {
      name: 'Rich Dad Poor Dad',
      slug: 'rdpd',
      category: 'Books',
      image: '/images/rdpd.jpg',
      price: '20',
      countInStock: '10',
      rating: '5',
      numReviews: 10,
      description: 'Good Quality Rich Dad Poor Dad Book',
    },
  ],
};

export default data;

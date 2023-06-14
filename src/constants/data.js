import images from './images';

const diner = [
  {
    title: 'Halibut',
    price: '$12.00',
    tags: '(1 Piece)',
  },
  {
    title: 'Ling Cod',
    price: '$10.00',
    tags: '(1 Piece)',
  },
  {
    title: 'Oyster',
    price: '$3.50',
    tags: '(1 Piece)',
  },
  {
    title: 'Prawn',
    price: '$3.50',
    tags: '(1 Piece)',
  },
];

const takeout = [
  {
    title: 'Clam Strips',
    price: '$8.00',
  },
  {
    title: 'Calamari',
    price: '$12.00',
  },
  {
    title: 'Small Chips',
    price: '$4.50',
  },
  {
    title: 'Medium Chips',
    price: '$7.00',

  },
  {
    title: 'Large Chips',
    price: '$8.50',
  },
  {
    title: 'Small Homemade Coleslaw',
    price: '$4.00',
  },
  {
    title: 'Medium Homemade Coleslaw',
    price: '$5.50',
  },
  {
    title: 'Large Homemade Coleslaw',
    price: '$7.00',
  },
  {
    title: 'Homemade Tartar',
    price: '$3.00',
  },
  {
    title: 'Onion Rings',
    price: '$6.00',
  },
  {
    title: 'Perogies',
    price: '$1.25',
    tags: 'each',
  },
];

const burger = [
  {
    title: 'Burger',
    price: '$9.50 - $14.00',
    tags: 'Halibut, Ling Cod, Prawn, Oyster',
  },
  {
    title: 'Chicken Strips',
    price: '$2.50',
    tags: 'each',
  },
  {
    title: 'Zucchini Strips',
    price: '$8.00',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Voted #1 Fish and Chips in Victoria',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Hottest Resturant in Victoria 2021',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Best Hospitality Multiple Years Running',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Most Oustanding Chef of the Year in Victoria',
  },
];

export default { diner, takeout, awards, burger };

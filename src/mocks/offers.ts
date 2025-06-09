import { Offers } from '../types/types';

export const offers: Offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg'
  },
  {
    id: 'b242bade-6e83-40f9-93b7-08efcadbd678',
    title: 'Waterfront with extraordinary view',
    type: 'house',
    price: 235,
    city: {
      name: 'Amsterdam',
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 13
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
  },
  {
    id: 'd52bf1af-2edd-47dc-89f0-38068abbb57c',
    title: 'Perfectly located Castro',
    type: 'house',
    price: 719,
    city: {
      name: 'Amsterdam',
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 13
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
  },
  {
    id: 'b4891f8a-0083-4d28-945a-5a398f16f7c0',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 136,
    city: {
      name: 'Amsterdam',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 13
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
  },
];

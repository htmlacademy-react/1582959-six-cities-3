import { Offers } from '../types/types';

export const offers: Offers[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
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
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.83861,
      longitude: 2.350499,
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
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.828556999999996,
      longitude: 4.362697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.6,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
  },
  {
    id: 'b4891f8a-0083-4d28-945a-5a398f16f7c0',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 136,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.534341000000005,
      longitude: 9.998654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
  },
];

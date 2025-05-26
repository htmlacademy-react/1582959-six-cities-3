export const Setting = {
  RentalOffersCount: 312
};

export const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amstardam', 'Hamburg', 'Dusseldorf'];

type Cards = {
  id: number;
  isPremium: boolean;
  previewImage: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  title: string;
  type: string;
}[];

export const cards: Cards = [
  {
    id: 1,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    isFavorite: false,
    rating: 4,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    id: 2,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Room'
  },
  {
    id: 3,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    isFavorite: false,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    id: 4,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    isFavorite: false,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    id: 5,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Room'
  }
];

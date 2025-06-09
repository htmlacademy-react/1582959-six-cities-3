import { Reviews } from '../types/types';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Reviews = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'h34kifd5-b953-4a30-8c8d-bd083cd6d44v',
    date: '2023-10-02T09:23:20.316Z',
    user: {
      name: 'Kendall',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false,
    },
    comment: 'Very cold and nice place. I like taking shower of ice cubes and sleeping under the window.',
    rating: 4,
  },
  {
    id: 'y34kifd5-j520-4a30-8c8d-bd083jj8g55v',
    date: '2022-04-05T09:23:20.316Z',
    user: {
      name: 'Kim',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
    },
    comment: 'Home is not amazing. Its like staying in a closet. The rooms, furnishings and artworks are aweful. The views of another house wall',
    rating: 3,
  },
];

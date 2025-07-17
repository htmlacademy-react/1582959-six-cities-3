import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import MainEmpty from './main-empty';

describe('Component: MainEmpty', () => {
  it('should render correct', () => {
    const activeCity = faker.location.city();
    const expectedText = /No places to stay available/i;
    const expectedTextWithCity = `We could not find any property available at the moment in ${activeCity}`;

    render(<MainEmpty activeCity={activeCity} />);

    const activeCityValue = screen.getByTestId('active-city-value');

    screen.getByText(expectedText);
    expect(activeCityValue.textContent).toMatch(expectedTextWithCity);
  });

});

import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const expectedText = '404. Page not found';
    const expectedLinkText = 'Вернуться на главную';

    const preparedComponent = withHistory(<NotFoundPage />);
    render(preparedComponent);

    screen.getByText(expectedText);
    screen.getByText(expectedLinkText);
  });
});

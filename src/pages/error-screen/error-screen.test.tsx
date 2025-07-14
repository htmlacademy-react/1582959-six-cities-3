import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorScreen from './error-screen';
import { withStore } from '../../utils/mock-component';
import { fetchOfferAction } from '../../store/api-actions';
import { APIRoute } from '../../const';
import { extractActionsTypes } from '../../utils/mocks';

describe('Component: ErrorScreen', () => {
  it('should render correctly', () => {

    const firstExpectedText = /Мы не смогли загрузить ваши предложения/i;
    const { withStoreComponent } = withStore(<ErrorScreen />, {});

    render(withStoreComponent);

    screen.getByText(firstExpectedText);
    screen.getByRole('button');
  });

  it('should dispatch "fetchOfferAction" when user clicked replay button', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<ErrorScreen />, {});
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, []);

    render(withStoreComponent);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type,
    ]);

  });
});

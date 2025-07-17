import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-component';
import { faker } from '@faker-js/faker';
import LoginPage from './login-page';
import { AuthorizationStatus } from '../../const';

describe('Component: LoginPage', () => {
  const initialState = {
    USER: {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.person.fullName(),
        avatarUrl: faker.image.avatar(),
        isPro: faker.datatype.boolean(),
        token: faker.internet.jwt(),
      }
    },
  };

  it('should render correctly', () => {
    const LoginTitleText = 'Sign in';
    const loginText = 'E-mail';
    const passwordText = 'Password';

    const { withStoreComponent } = withStore(<LoginPage />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    screen.getAllByText(LoginTitleText);
    screen.getByText(loginText);
    screen.getByText(passwordText);
  });

  it('should render correctly when user enter login and password', async () => {
    const loginElementTestId = 'loginElement';
    const passwordElementTestId = 'passwordElement';
    const expectedLoginValue = 'keks';
    const expectedPasswordValue = '123qwerty';
    const { withStoreComponent } = withStore(<LoginPage />, initialState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(loginElementTestId),
      expectedLoginValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    screen.getByDisplayValue(expectedLoginValue);
    screen.getByDisplayValue(expectedPasswordValue);
  });

});

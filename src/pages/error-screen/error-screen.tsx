import { useAppDispatch } from '../../hooks';
import { fetchOfferAction } from '../../store/api-actions';
import './error-screen.css';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="error-screen-container">
      <div className="error-message">
        <img src='public\img\bug-erreur.webp' alt="Error Icon" className="error-icon" />
        <h1 className="error-title">Упс! Произошла ошибка 😔</h1>
        <p className="error-text">
                    Мы не смогли загрузить ваши предложения.<br />Попробуйте ещё раз!
        </p>
        <button
          onClick={() => {
            dispatch(fetchOfferAction());
          }}
          className="retry-button"
        >
                    Повторить попытку
        </button>
      </div>
    </div>
  );
}
export default ErrorScreen;

import { useAppDispatch } from '../../hooks';
import { fetchOfferAction } from '../../store/api-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="error__text">Не удалось загрузить предложения</p>
      <button
        onClick={() => {
          dispatch(fetchOfferAction());
        }}
        className="replay replay--error"
        type="button"
      >
                Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorScreen;

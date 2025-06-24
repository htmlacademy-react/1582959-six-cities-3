import './error-message.css';
import { useAppSelector } from '../../hooks';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error) ?
    <div className="error-message">
      <h3>Возникла ошибка:</h3>
      <p>{error}</p>
    </div>
    : null;
}

export default ErrorMessage;

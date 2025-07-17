type Cities = {
  cities: string[];
  activeCity: string;
  onChangeCity: (newCity: string) => void;
};

function CitiesList({ cities, activeCity, onChangeCity }: Cities): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`} href="#" data-testid="locations__item-link"
              onClick={(evt) => {
                evt.preventDefault();
                onChangeCity(city);
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;

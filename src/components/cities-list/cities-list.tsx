type Cities = {
  cities: string[];
  isActive: boolean;
};

function CitiesList({ cities, isActive }: Cities): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#">
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;

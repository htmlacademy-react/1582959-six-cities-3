import { useState } from 'react';

type SortProps = {
  sorts: string[];
  activeSortOption: string;
  onSortChange: (sort: string) => void;
}

function Sort({ sorts, activeSortOption, onSortChange }: SortProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" data-testid="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {activeSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {sorts.map((sort) => (
            <li className={`places__option ${activeSortOption === sort ? 'places__option--active' : ''}`} key={sort} tabIndex={0}
              onClick={(evt) => {
                evt.preventDefault();
                onSortChange(sort);
                setIsOpen(false);
              }}
            >
              {sort}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Sort;

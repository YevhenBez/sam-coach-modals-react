import css from './css/filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

function Filter() {
  const filter = useSelector(selectFilter);
  console.log(`фильтр  ${filter.search}`);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        className={css.inputFilterName}
        type="text"
        value={filter.search}
        onChange={changeFilter}
      />
    </label>
  );
}

export default Filter;

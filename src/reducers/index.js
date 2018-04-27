import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { selectedItemId } from './selectionItem';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  selectedItemId
});
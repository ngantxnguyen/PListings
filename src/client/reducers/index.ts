import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth';
import { currentLocationReducer, searchLocationReducer } from './location';
import { btnLoaderReducer } from './loader';
import { listingReducer, listingSavedReducer } from './listing';
import { filtersReducer } from './filters';
import { StoreState } from '../utilities';

export const reducers = combineReducers<StoreState>({
  user: authReducer,
  form: formReducer,
  currentLocation: currentLocationReducer,
  searchedLocations: searchLocationReducer,
  btnLoading: btnLoaderReducer,
  listing: listingReducer,
  listingSaved: listingSavedReducer,
  defaultFilters: filtersReducer,
});

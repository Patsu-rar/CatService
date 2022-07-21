import * as catsActions from "./cat.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";

import {EntityState, EntityAdapter, createEntityAdapter} from "@ngrx/entity";

import {Cat} from "../cat.model";
import * as fromRoot from "../../../state/app-state";

export interface CatState extends EntityState<Cat>{
  selectedCatId: number | null,
  loading: boolean,
  loaded: boolean,
  error: string
}

export interface AppState extends fromRoot.AppState {
  cats: CatState
}

export const catAdapter: EntityAdapter<Cat> = createEntityAdapter<Cat>();

export const defaultCat: CatState = {
  ids: [],
  entities: {},
  selectedCatId: null,
  loading: false,
  loaded: false,
  error: ""
}

export const initialState = catAdapter.getInitialState(defaultCat);

export function catReducer(state = initialState, action: catsActions.action): CatState {
  switch (action.type) {
    case catsActions.CatActionTypes.LOAD_CATS: {
      return {
        ...state,
        loading: true
      }
    }
    case catsActions.CatActionTypes.LOAD_CATS_SUCCESS: {
      return catAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      })
    }
    case catsActions.CatActionTypes.LOAD_CATS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

const getCatFeatureState = createFeatureSelector<CatState>(
  "cats"
);

export const getCats = createSelector(
  getCatFeatureState,
  catAdapter.getSelectors().selectAll
)

export const getCatsLoading = createSelector(
  getCatFeatureState,
  (state: CatState) => state.loading
)

export const getCatsLoaded = createSelector(
  getCatFeatureState,
  (state: CatState) => state.loaded
)

export const getError = createSelector(
  getCatFeatureState,
  (state: CatState) => state.error
)

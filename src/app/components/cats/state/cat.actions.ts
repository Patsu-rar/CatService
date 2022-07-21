import {Action} from "@ngrx/store";

import {Cat} from "../cat.model";

export enum CatActionTypes {
  LOAD_CATS = "[Cat] Load Cats",
  LOAD_CATS_SUCCESS = "[Cat] Load Cats Success",
  LOAD_CATS_FAIL = "[Cat] Load Cats Fail"
}

export class LoadCats implements Action {
  readonly type = CatActionTypes.LOAD_CATS;
}

export class LoadCatsSuccess implements Action {
  readonly type = CatActionTypes.LOAD_CATS_SUCCESS;

  constructor(public payload: Cat[]) {
  }
}

export class LoadCatsFail implements Action {
  readonly type = CatActionTypes.LOAD_CATS_FAIL;

  constructor(public payload: string) {
  }
}

export type action = LoadCats | LoadCatsSuccess | LoadCatsFail;

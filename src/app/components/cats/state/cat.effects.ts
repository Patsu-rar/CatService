import {Injectable} from "@angular/core";

import {Actions, createEffect, ofType} from "@ngrx/effects";

import {Observable, of} from "rxjs";
import {map, mergeMap, catchError} from "rxjs";

import {CatsService} from "../../../services/cats.service";
import * as catsActions from "../state/cat.actions";
import {Cat} from "../cat.model";
import {Action} from "@ngrx/store";

@Injectable()
export class CatEffect {

  constructor(
    private actions$: Actions,
    private catsService: CatsService
  ) {
  }

  loadCats$: Observable<Action> = createEffect(() => this.actions$.pipe(
      ofType<catsActions.LoadCats>(
        catsActions.CatActionTypes.LOAD_CATS
      ),
      mergeMap((actions: catsActions.LoadCats) =>
        this.catsService.getCats().pipe(
          map((cats: Cat[]) =>
            new catsActions.LoadCatsSuccess(cats)
          ),
          catchError(err => of(new catsActions.LoadCatsFail(err)))
        )
      )
    )
  )
}

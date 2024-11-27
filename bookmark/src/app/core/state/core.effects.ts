import { Injectable } from '@angular/core';
import {
  actionCoreBookmarks,
  actionCoreFilteredBookmarks,
} from '../state/core.actions';
import { Action } from '@ngrx/store';

import { tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable({ providedIn: 'root' })
export class CoreEffects {
  constructor(private actions$: Actions<Action>) {}

  coreGetBookmarksEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionCoreBookmarks),
        tap((action) => {})
      ),
    { dispatch: false }
  );

  coreGetFilteredBookmarksEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionCoreFilteredBookmarks),
        tap((action) => {})
      ),
    { dispatch: false }
  );
}

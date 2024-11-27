import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import {
  actionCoreBookmarks,
  actionCoreFilteredBookmarks,
} from 'src/app/core/state/core.actions';
import { ICoreState } from 'src/app/core/state/core.state';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store$: Store<ICoreState>) {}

  public dispatchActionCoreSetBookmarksState(payload: any) {
    console.log('payload', payload);
    this.store$.dispatch(actionCoreBookmarks({ payload: payload }));
  }

  public dispatchActionCoreSetFilteredBookmarksState(payload: any) {
    console.log('payload', payload);
    this.store$.dispatch(actionCoreFilteredBookmarks({ payload: payload }));
  }

  public getState() {
    let state: any;
    this.store$.pipe(take(1)).subscribe((s) => (state = s));
    return state;
  }
}

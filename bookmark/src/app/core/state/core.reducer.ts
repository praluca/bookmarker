import { createReducer, on, Action } from '@ngrx/store';
import {
  actionCoreBookmarks,
  actionCoreFilteredBookmarks,
} from './core.actions';
import { coreFactory, ICoreState } from './core.state';

export const initialState = coreFactory();

const reducer = createReducer(
  initialState,
  on(actionCoreBookmarks, (state, { payload }) => ({
    ...state,
    bookmarks: payload,
  })),
  on(actionCoreFilteredBookmarks, (state, { payload }) => ({
    ...state,
    filteredBookmarks: payload,
  }))
);

export function coreReducer(state: ICoreState | undefined, action: Action) {
  return reducer(state, action);
}

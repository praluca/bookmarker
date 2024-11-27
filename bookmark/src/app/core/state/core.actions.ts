import { createAction, props } from '@ngrx/store';

export const actionCoreBookmarks = createAction(
  '[Core] Get Bookmarks',
  props<{ payload: any }>()
);

export const actionCoreFilteredBookmarks = createAction(
  '[Core] Get Filtered Bookmarks',
  props<{ payload: any }>()
);

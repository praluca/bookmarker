import { Bookmark } from 'src/app/shared/models/Bookmark';

export interface ICoreState {
  bookmarks: Array<Bookmark>;
  filteredBookmarks: Array<Bookmark>;
}

export function coreFactory(): ICoreState {
  return {
    bookmarks: [],
    filteredBookmarks: [],
  };
}

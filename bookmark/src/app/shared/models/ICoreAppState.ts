import { Bookmark } from './Bookmark';

export interface ICoreAppState {
  bookmarks: Array<Bookmark>;
  filteredBookmarks: Array<Bookmark>;
}

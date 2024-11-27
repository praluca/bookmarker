import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConst } from '../models/app-const';
import { Bookmark } from '../models/Bookmark';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getBookmarks(): Observable<Array<Bookmark>> {
    const url = AppConst.GET_ALL_BOOKMARKS;
    return this.http.get<Array<Bookmark>>(url);
  }

  getFilteredBookmarks(searchedValue: string): Observable<Array<Bookmark>> {
    const url = AppConst.GET_FILTERED_BOOKMARKS;
    return this.http.get<Array<Bookmark>>(url, {
      params: {
        searchedValue,
      },
    });
  }

  postBookmark(bookmark: Bookmark): Observable<any> {
    const url = AppConst.POST_BOOKMARK;
    return this.http.post<string>(url, bookmark);
  }

  updateBookmark(bookmark: Bookmark, bookmarkId: number): Observable<any> {
    const url = AppConst.UPDATE_BOOKMARK + '/' + bookmarkId;
    return this.http.put<Bookmark>(url, bookmark);
  }

  deleteBookmark(bookmarkId: number): Observable<any> {
    const url = AppConst.DELETE_BOOKMARK + '/' + bookmarkId;
    return this.http.delete<Bookmark>(url);
  }
}

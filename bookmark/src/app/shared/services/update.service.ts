import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private searchedWord = new BehaviorSubject('');
  currentSearchedWord = this.searchedWord.asObservable();

  private updateBookmarksList = new BehaviorSubject(false);
  currentUpdateBookmarksList = this.updateBookmarksList.asObservable();

  constructor() {}

  updateCurrentSearchWord(value: string) {
    this.searchedWord.next(value);
  }

  triggerUpdateList(value: boolean) {
    this.updateBookmarksList.next(value);
  }
}

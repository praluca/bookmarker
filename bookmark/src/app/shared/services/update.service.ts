import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GenericErr } from '../models/GenericErr';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private searchedWord = new BehaviorSubject('');
  currentSearchedWord = this.searchedWord.asObservable();

  private updateBookmarksList = new BehaviorSubject(false);
  currentUpdateBookmarksList = this.updateBookmarksList.asObservable();

  private error = new BehaviorSubject(new GenericErr());
  currentError = this.error.asObservable();

  constructor() {}

  updateCurrentSearchWord(value: string) {
    this.searchedWord.next(value);
  }

  triggerUpdateList(value: boolean) {
    this.updateBookmarksList.next(value);
  }

  updateError(value: any) {
    this.error.next(value);
  }
}

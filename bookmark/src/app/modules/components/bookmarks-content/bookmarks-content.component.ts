import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectCoreAppState } from 'src/app/core/state/core.selectors';
import { Bookmark } from 'src/app/shared/models/Bookmark';
import { ICoreAppState } from 'src/app/shared/models/ICoreAppState';
import { ApiService } from 'src/app/shared/services/api.service';
import { StoreService } from 'src/app/shared/services/store.service';
import { UpdateService } from 'src/app/shared/services/update.service';
import { DateUtil } from 'src/app/shared/utils/date-util';

@Component({
  selector: 'app-bookmarks-content',
  templateUrl: './bookmarks-content.component.html',
  styleUrls: ['./bookmarks-content.component.scss'],
})
export class BookmarksContentComponent implements OnInit, OnDestroy {
  todayBookmarks: Array<Bookmark> = [];
  yesterdayBookmarks: Array<Bookmark> = [];
  olderBookmarks: Array<Bookmark> = [];
  filteredBookmarks: Array<Bookmark> = [];
  searchedWord = '';
  searchedWordSubscription: Subscription = Subscription.EMPTY;
  triggerUpdateSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private apiService: ApiService,
    private storeService: StoreService,
    private store$: Store<ICoreAppState>,
    private updateService: UpdateService
  ) {}

  ngOnInit(): void {
    this.getBookmarks();
    this.searchedWordSubscription =
      this.updateService.currentSearchedWord.subscribe((response: string) => {
        this.searchedWord = response;
      });

    this.triggerUpdateSubscription =
      this.updateService.currentUpdateBookmarksList.subscribe((response) => {
        if (response) {
          this.resetArrays();
          this.getBookmarks();
        }
      });

    this.store$.select(selectCoreAppState).subscribe((response: any) => {
      this.resetArrays();
      if (response.filteredBookmarks.length > 0) {
        this.filteredBookmarks = response.filteredBookmarks;
      } else {
        response.bookmarks.forEach((elem: Bookmark) => {
          if (
            DateUtil.today().toISOString().split('T')[0] ===
            elem.created_at.split('T')[0]
          ) {
            this.todayBookmarks.push(elem);
          } else if (
            DateUtil.yesterday().toISOString().split('T')[0] ===
            elem.created_at.split('T')[0]
          ) {
            this.yesterdayBookmarks.push(elem);
          } else {
            this.olderBookmarks.push(elem);
          }
        });
      }
    });
  }

  getBookmarks() {
    this.apiService.getBookmarks().subscribe((response: Array<Bookmark>) => {
      this.storeService.dispatchActionCoreSetBookmarksState(response);
    });
  }

  resetArrays() {
    this.todayBookmarks = [];
    this.yesterdayBookmarks = [];
    this.olderBookmarks = [];
    this.filteredBookmarks = [];
  }

  ngOnDestroy(): void {
    this.searchedWordSubscription.unsubscribe();
    this.triggerUpdateSubscription.unsubscribe();
  }
}

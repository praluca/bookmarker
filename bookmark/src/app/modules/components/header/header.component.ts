import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { AddBookmarkDialogComponent } from 'src/app/shared/components/add-bookmark-dialog/add-bookmark-dialog.component';
import { Bookmark } from 'src/app/shared/models/Bookmark';
import { ApiService } from 'src/app/shared/services/api.service';
import { StoreService } from 'src/app/shared/services/store.service';
import { UpdateService } from 'src/app/shared/services/update.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchedValue = new FormControl();

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private storeService: StoreService,
    private updateService: UpdateService
  ) {}

  ngOnInit(): void {
    this.searchedValue.valueChanges
      .pipe(debounceTime(500))
      .subscribe((inputValue) => {
        this.updateService.updateCurrentSearchWord(inputValue);
        this.apiService
          .getFilteredBookmarks(inputValue)
          .subscribe((response: Array<Bookmark>) => {
            this.storeService.dispatchActionCoreSetFilteredBookmarksState(
              response
            );
          });
      });
  }

  onAddBookmark() {
    this.dialog.open(AddBookmarkDialogComponent, {
      height: '300px',
      width: '750px',
      autoFocus: false,
    });
  }
}

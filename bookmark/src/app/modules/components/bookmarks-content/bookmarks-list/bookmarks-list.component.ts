import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookmarkDialogComponent } from 'src/app/shared/components/add-bookmark-dialog/add-bookmark-dialog.component';
import { DeleteBookmarkDialogComponent } from 'src/app/shared/components/delete-bookmark-dialog/delete-bookmark-dialog.component';
import { Bookmark } from 'src/app/shared/models/Bookmark';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.scss'],
})
export class BookmarksListComponent implements OnInit {
  @Input() bookmarks: Array<Bookmark> = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onEditBookmark(bookmark: Bookmark) {
    this.dialog.open(AddBookmarkDialogComponent, {
      data: bookmark,
      height: '300px',
      width: '750px',
      autoFocus: false,
    });
  }

  onDeleteBookmark(bookmark: Bookmark) {
    this.dialog.open(DeleteBookmarkDialogComponent, {
      data: bookmark,
      height: '270px',
      width: '470px',
      autoFocus: false,
    });
  }

  onOpenPage(url: string) {
    window.open(url, '_blank');
  }
}

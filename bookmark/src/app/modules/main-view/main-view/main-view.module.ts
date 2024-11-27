import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookmarksContentComponent } from '../../components/bookmarks-content/bookmarks-content.component';
import { BookmarksListComponent } from '../../components/bookmarks-content/bookmarks-list/bookmarks-list.component';
import { AddBookmarkDialogComponent } from 'src/app/shared/components/add-bookmark-dialog/add-bookmark-dialog.component';
import { DeleteBookmarkDialogComponent } from 'src/app/shared/components/delete-bookmark-dialog/delete-bookmark-dialog.component';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    BookmarksContentComponent,
    BookmarksListComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialSharedModule],
  exports: [HeaderComponent, BookmarksContentComponent],
})
export class MainViewModule {}

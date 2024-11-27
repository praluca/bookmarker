import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookmarksContentComponent } from '../../components/bookmarks-content/bookmarks-content.component';
import { BookmarksListComponent } from '../../components/bookmarks-content/bookmarks-list/bookmarks-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BookmarksContentComponent,
    BookmarksListComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, BookmarksContentComponent],
})
export class MainViewModule {}

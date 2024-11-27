import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from './material-shared.module';
import { AddBookmarkDialogComponent } from './components/add-bookmark-dialog/add-bookmark-dialog.component';
import { DeleteBookmarkDialogComponent } from './components/delete-bookmark-dialog/delete-bookmark-dialog.component';

@NgModule({
  declarations: [AddBookmarkDialogComponent, DeleteBookmarkDialogComponent],
  imports: [CommonModule, MaterialSharedModule],
  exports: [
    MaterialSharedModule,
    CommonModule,
    AddBookmarkDialogComponent,
    DeleteBookmarkDialogComponent,
  ],
})
export class SharedModule {}

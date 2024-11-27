import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-delete-bookmark-dialog',
  templateUrl: './delete-bookmark-dialog.component.html',
  styleUrls: ['./delete-bookmark-dialog.component.scss'],
})
export class DeleteBookmarkDialogComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private updateService: UpdateService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteBookmarkDialogComponent>
  ) {}

  ngOnInit(): void {}

  onCancel() {
    this.dialogRef.close();
  }

  onDeleteBookmark() {
    this.apiService.deleteBookmark(this.data.id).subscribe((response) => {
      this.updateService.triggerUpdateList(true);
      this.dialogRef.close();
    });
  }
}

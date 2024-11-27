import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Bookmark } from '../../models/Bookmark';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StoreService } from '../../services/store.service';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-add-bookmark-dialog',
  templateUrl: './add-bookmark-dialog.component.html',
  styleUrls: ['./add-bookmark-dialog.component.scss'],
})
export class AddBookmarkDialogComponent implements OnInit {
  dialogTitle = 'Create Bookmark';
  bookmarkForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    url: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
      ),
    ]),
  });

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddBookmarkDialogComponent>,
    private updateService: UpdateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.dialogTitle = 'Edit Bookmark';
      this.bookmarkForm.setValue({
        name: this.data.name,
        url: this.data.url,
      });
    }
  }

  onSubmit() {
    let payload = new Bookmark(
      this.bookmarkForm.value.name!,
      this.bookmarkForm.value.url!,
      new Date().toISOString()
    );
    if (this.data) {
      this.apiService
        .updateBookmark(payload, this.data.id)
        .subscribe((response) => {
          this.updateService.triggerUpdateList(true);
          this.dialogRef.close();
        });
    } else {
      this.apiService.postBookmark(payload).subscribe((response) => {
        this.updateService.triggerUpdateList(true);
        this.dialogRef.close();
      });
    }
  }

  onCancelDialog() {
    this.dialogRef.close();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookmarkDialogComponent } from './delete-bookmark-dialog.component';

describe('DeleteBookmarkDialogComponent', () => {
  let component: DeleteBookmarkDialogComponent;
  let fixture: ComponentFixture<DeleteBookmarkDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBookmarkDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteBookmarkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

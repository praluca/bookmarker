import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksContentComponent } from './bookmarks-content.component';

describe('BookmarksListComponent', () => {
  let component: BookmarksContentComponent;
  let fixture: ComponentFixture<BookmarksContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarksContentComponent],
    });
    fixture = TestBed.createComponent(BookmarksContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksListComponent } from './bookmarks-list.component';

describe('BookmarksListComponent', () => {
  let component: BookmarksListComponent;
  let fixture: ComponentFixture<BookmarksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarksListComponent]
    });
    fixture = TestBed.createComponent(BookmarksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

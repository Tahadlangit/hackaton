import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTopicViewComponent } from './forum-topic-view.component';

describe('ForumTopicViewComponent', () => {
  let component: ForumTopicViewComponent;
  let fixture: ComponentFixture<ForumTopicViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumTopicViewComponent]
    });
    fixture = TestBed.createComponent(ForumTopicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

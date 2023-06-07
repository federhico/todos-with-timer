import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTimerComponent } from './todo-timer.component';

describe('TodoTimerComponent', () => {
  let component: TodoTimerComponent;
  let fixture: ComponentFixture<TodoTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAppItensComponent } from './todo-input-app-itens.component';

describe('TodoInputAppItensComponent', () => {
  let component: TodoInputAppItensComponent;
  let fixture: ComponentFixture<TodoInputAppItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoInputAppItensComponent]
    });
    fixture = TestBed.createComponent(TodoInputAppItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

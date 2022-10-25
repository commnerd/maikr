import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditListComponent } from './text-edit-list.component';

describe('TextEditListComponent', () => {
  let component: TextEditListComponent;
  let fixture: ComponentFixture<TextEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesUserComponent } from './taches-user.component';

describe('TachesUserComponent', () => {
  let component: TachesUserComponent;
  let fixture: ComponentFixture<TachesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TachesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

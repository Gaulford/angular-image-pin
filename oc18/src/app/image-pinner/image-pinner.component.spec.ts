import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePinnerComponent } from './image-pinner.component';

describe('ImagePinnerComponent', () => {
  let component: ImagePinnerComponent;
  let fixture: ComponentFixture<ImagePinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

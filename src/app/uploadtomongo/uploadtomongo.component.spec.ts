import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadtomongoComponent } from './uploadtomongo.component';

describe('UploadtomongoComponent', () => {
  let component: UploadtomongoComponent;
  let fixture: ComponentFixture<UploadtomongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadtomongoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadtomongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Convertor } from './convertor';

describe('Convertor', () => {
  let component: Convertor;
  let fixture: ComponentFixture<Convertor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Convertor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Convertor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

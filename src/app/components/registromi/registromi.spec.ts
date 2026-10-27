import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registromi } from './registromi';

describe('Registromi', () => {
  let component: Registromi;
  let fixture: ComponentFixture<Registromi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registromi]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Registromi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

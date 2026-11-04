import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pruebaformulario } from './pruebaformulario';

describe('Pruebaformulario', () => {
  let component: Pruebaformulario;
  let fixture: ComponentFixture<Pruebaformulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pruebaformulario],
    }).compileComponents();

    fixture = TestBed.createComponent(Pruebaformulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejemplo } from './ejemplo';
import { FormsModule } from '@angular/forms';

describe('Ejemplo', () => {
  let component: Ejemplo;
  let fixture: ComponentFixture<Ejemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejemplo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelVehiculos } from './panel-vehiculos';

describe('PanelVehiculos', () => {
  let component: PanelVehiculos;
  let fixture: ComponentFixture<PanelVehiculos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelVehiculos],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelVehiculos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

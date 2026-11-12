import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReserverEvenement } from './reserver-evenement';

describe('ReserverEvenement', () => {
  let component: ReserverEvenement;
  let fixture: ComponentFixture<ReserverEvenement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserverEvenement],
    }).compileComponents();

    fixture = TestBed.createComponent(ReserverEvenement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

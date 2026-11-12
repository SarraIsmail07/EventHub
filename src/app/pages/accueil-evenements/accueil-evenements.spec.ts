import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccueilEvenements } from './accueil-evenements';

describe('AccueilEvenements', () => {
  let component: AccueilEvenements;
  let fixture: ComponentFixture<AccueilEvenements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilEvenements],
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilEvenements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

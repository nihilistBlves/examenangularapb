import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallespeliculaComponent } from './detallespelicula.component';

describe('DetallespeliculaComponent', () => {
  let component: DetallespeliculaComponent;
  let fixture: ComponentFixture<DetallespeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallespeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallespeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

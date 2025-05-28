import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatStatusComponent } from './wheat-status.component';

describe('WheatStatusComponent', () => {
  let component: WheatStatusComponent;
  let fixture: ComponentFixture<WheatStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheatStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheatStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

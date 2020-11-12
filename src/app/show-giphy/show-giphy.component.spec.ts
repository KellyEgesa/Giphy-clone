import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGiphyComponent } from './show-giphy.component';

describe('ShowGiphyComponent', () => {
  let component: ShowGiphyComponent;
  let fixture: ComponentFixture<ShowGiphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGiphyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

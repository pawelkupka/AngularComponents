import { TestBed } from '@angular/core/testing';
import { MyTextboxComponent } from './my-textbox.component';

describe('MyTextboxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        MyTextboxComponent
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MyTextboxComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

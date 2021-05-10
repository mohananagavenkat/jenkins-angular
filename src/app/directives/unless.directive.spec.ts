import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UnlessDirective } from './unless.directive';

describe('UnlessDirective', () => {
  let fixture : ComponentFixture<TestComponent>;
  let component :TestComponent;
  beforeEach(async ()=> {
    TestBed.configureTestingModule({
      declarations: [TestComponent, UnlessDirective]
    }).compileComponents();
  })

  beforeEach(async ()=> {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should create an instance', () => {
      expect(fixture).toBeTruthy();
  });

  it('should render elements based on the condition', () => {
      let divs: DebugElement[];
      divs = fixture.debugElement.queryAll(By.css('div'));
      expect(divs.length).toEqual(2);
      component.condition1 = false;
      fixture.detectChanges();
      divs = fixture.debugElement.queryAll(By.css('div'));
      console.log(divs);
      expect(divs.length).toEqual(1);
      expect(divs[0].nativeElement.className).toBe('condition2');
      component.condition2 = false;
      fixture.detectChanges();
      divs = fixture.debugElement.queryAll(By.css('div'));
      console.log(divs);
      expect(divs.length).toEqual(0);
    });

});

@Component({
  selector: 'test',
  template: `
    <div *appUnless="condition1" class="condition1">This is div1</div>
    <div *appUnless="condition2" class="condition2">This is div1</div>
  `,
})
export class TestComponent {
  condition1 = true;
  condition2 = true;
}

import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlighterDirective } from './highlighter.directive';

describe('HighlighterDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HighlighterDirective, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    fixture.detectChanges();
  });
  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should have 2 elements with the directive being applied', () => {
    const ele = fixture.debugElement.queryAll(
      By.directive(HighlighterDirective)
    );
    expect(ele.length).toBe(2);
  });
});

@Component({
  template: ` <h2 appHighlighter>Something Yellow</h2>
    <h2>The Default (Gray)</h2>
    <h2>No Highlight</h2>
    <input #box appHighlighter value="yellow" />`,
})
class TestComponent {}

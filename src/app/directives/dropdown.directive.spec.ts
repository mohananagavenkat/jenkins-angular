import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MyDropdownComponent } from '../my-dropdown/my-dropdown.component';
import { DropdownDirective } from './dropdown.directive';

describe('DropdownDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, DropdownDirective, MyDropdownComponent],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
  });
  it('should create an instance', () => {
    const ele = fixture.debugElement.queryAll(By.directive(DropdownDirective));
    expect(ele.length).toBe(2);
  });

  it('should show dropdown when we clicked on dropdown toggle', () => {
    const ele = fixture.debugElement.query(By.directive(DropdownDirective));
    expect(ele.classes.show).toBeUndefined();
    ele.triggerEventHandler('click', {});
    expect(ele.classes.show).toBe(true);
    ele.triggerEventHandler('click', {});
    expect(ele.classes.show).toBe(false);
  });
});

@Component({
  selector: 'test',
  template: `
    <app-my-dropdown
      appDropdown
      [dropDownText]="'My Drop Down'"
      [dropDownItems]="['something', 'other thing', 'some other thing']"
    ></app-my-dropdown>
    <app-my-dropdown
      appDropdown
      class="dark-theme"
      [dropDownText]="'My Drop Down'"
      [dropDownItems]="['something', 'other thing', 'some other thing']"
    ></app-my-dropdown>
  `,
})
export class TestComponent {}

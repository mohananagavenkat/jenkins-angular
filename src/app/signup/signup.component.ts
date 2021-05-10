import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  skillsData: string[];
  signupForm: FormGroup;
  genders: Array<string>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillsData = ['HTML', 'CSS', 'JS', 'ANGULAR', 'REACT'];
    this.genders = ['MALE', 'FEMALE', 'OTHERS'];
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      skills: this.fb.array([], [Validators.required]),
      gender: ['', Validators.required],
    });
  }

  onSkillChange(event: MouseEvent) {
    console.log(event);
    const ele = event.target as HTMLInputElement;
    const skillsControls = this.signupForm.get('skills') as FormArray;
    if (ele.checked) {
      skillsControls.push(new FormControl(ele.value));
      return;
    }
    skillsControls.removeAt(
      skillsControls.controls.findIndex(
        (control) => control.value === ele.value
      )
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'stackblitz-nx-angular-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  constructor(
    /**
     * - in order to use FormBuilder, need to import the ReactiveFormsModule & FormsModule
     */
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // create and init the form
    this.initForm();
  }

  initForm() {
    // this.basicForm = this.fb.group({
    //   name: [''],
    //   age: 0,
    // });
  }
}

// export interface BasicFormGroupModel{
//   name: FormControl<string | null>
//   age: FormControl<number | null>
// }

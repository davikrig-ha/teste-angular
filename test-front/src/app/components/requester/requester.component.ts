import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html',
  styleUrls: ['./requester.component.scss']
})
export class RequesterComponent {
  requesterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.requesterForm = this.formBuilder.group({
      requesterName: ['', Validators.required],
      description: ['', Validators.required],
      productPrice: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  onSubmit(): void {
    if (this.requesterForm.valid) {
      console.log(this.requesterForm.value);
    }
  }
}

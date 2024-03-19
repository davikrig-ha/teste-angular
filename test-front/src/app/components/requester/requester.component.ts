import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitationService } from '../../../providers/solicitations.provider';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html',
  styleUrls: ['./requester.component.scss'],
})
export class RequesterComponent {
  requesterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: SolicitationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.requesterForm = this.formBuilder.group({
      requesterName: ['', Validators.required],
      description: ['', Validators.required],
      productPrice: ['', Validators.required],
    });
  }

  hasData = false;

  async ngOnInit() {
    const data = await this.api.getLast();
    this.hasData = !!data;
    if (this.hasData) {
      this.snackBar.open(
        'Já existe uma solicitação em aberto aguardando avaliação',
        'Fechar'
      );
      this.router.navigate(['/home']);
    }
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

  async onSubmit(): Promise<void> {
    if (this.requesterForm.valid) {
      const data = this.requesterForm.getRawValue();
      await this.api.create(data);
      this.router.navigate(['/home']);
    }
  }
}

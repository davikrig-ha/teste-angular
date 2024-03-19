import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SolicitationService } from '../../../providers/solicitations.provider';

@Component({
  selector: 'app-warehouseman',
  templateUrl: './warehouseman.component.html',
  styleUrl: './warehouseman.component.scss',
})
export class WarehousemanComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: SolicitationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      requesterName: [{ value: '', disabled: true }],
      description: [{ value: '', disabled: true }],
      productPrice: [{ value: '', disabled: true }],
      status: [true],
      observation: [''],
    });
  }

  hasData: boolean = false;
  id: number | null = null;

  async ngOnInit() {
    const data = await this.api.getLast();
    this.hasData = !!data;
    if (!this.hasData) {
      this.snackBar.open(
        'Não há nenhuma solicitação disponível para avaliação no momento',
        'Fechar'
      );
      this.router.navigate(['/home']);
    } else {
      this.id = data.id;
      this.form.patchValue({
        requesterName: data.requesterName,
        description: data.description,
        productPrice: data.productPrice,
      });
      if (this.form) {
        this.form.get('status')!.valueChanges.subscribe((status) => {
          if (status === false) {
            this.form.get('observation')!.setValidators(Validators.required);
          } else {
            this.form.get('observation')!.clearValidators();
          }
          this.form.get('observation')!.updateValueAndValidity();
        });
      }
    }
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      await this.api.update(this.id!, data);
      this.router.navigate(['/home']);
    }
  }
}

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SolicitationService } from '../../../providers/solicitations.provider';
import { Solicitations } from '../../types/solicitations.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  constructor(
    private api: SolicitationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  dataTable: Solicitations[] = [];
  originalDataTable: Solicitations[] = [];

  selectedStatus: string | null = null;
  statusOptions = [
    { value: null, viewValue: 'Todos' },
    { value: 'true', viewValue: 'Aprovado' },
    { value: 'false', viewValue: 'Reprovado' },
  ];

  async ngOnInit() {
    await this.getData();
    if (this.dataTable.length <= 0) {
      this.snackBar.open('Não há nenhuma solicitação cadastrada', 'Fechar');
      this.router.navigate(['/home']);
    }
  }

  onReturn() {
    this.router.navigate(['/home']);
  }

  async getData() {
    this.originalDataTable = await this.api.getAll();
    this.dataTable = [...this.originalDataTable];
  }

  applyFilter(searchValue: string) {
    searchValue = searchValue.toLowerCase();
    this.dataTable = this.originalDataTable.filter(
      (item) =>
        (item.requesterName.toLowerCase().includes(searchValue) ||
          item.description.toLowerCase().includes(searchValue)) &&
        (this.selectedStatus === null ||
          item.status === JSON.parse(this.selectedStatus))
    );
  }
}

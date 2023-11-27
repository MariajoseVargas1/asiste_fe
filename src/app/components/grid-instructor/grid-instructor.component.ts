import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-instructor',
  templateUrl: './grid-instructor.component.html'
})
export class GridInstructorComponent {
 // Cada definición de columna da como resultado una columna.
 public columnDefs: ColDef[] = [
  { field: 'make'},
  { field: 'model'},
  { field: 'price' }
];

// DefaultColDef sets props common to all Columns-DefaultColDef establece accesorios comunes a todas las columnas
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
};

//La cuadrícula recibe datos de fila a través de la rowDatapropiedad de cuadrícula. Esto está conectado mediante un Observable.

//Datos que se muestran en la cuadrícula.
public rowData$!: Observable<any[]>;

// Para acceder a la API de Grid
@ViewChild(AgGridAngular) agGrid!: AgGridAngular;

constructor(private http: HttpClient) {}

// Ejemplo de carga de datos desde el servidor
onGridReady(params: GridReadyEvent) {
  this.rowData$ = this.http
    .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
}

// Example of consuming Grid Event
onCellClicked( e: CellClickedEvent): void {
  console.log('cellClicked', e);
}

// Example using Grid's API
clearSelection(): void {
  this.agGrid.api.deselectAll();
}
}

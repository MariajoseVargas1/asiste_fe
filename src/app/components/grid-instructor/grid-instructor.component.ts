import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-grid-instructor',
  templateUrl: './grid-instructor.component.html'
})
export class GridInstructorComponent implements OnInit{

  rowData$!: Observable<any[]>;



  colDefs: ColDef[] = [
    {field: 'make', sortable:true, filter:true},//sortable:true, PARA ORDENAR filter:true PARA FILTRAR, SE DEN PONER EN TODAS COMO TRUE
    {field: 'model',sortable:true, filter:true},
    {field: 'price',sortable:true, filter:true},//definiciones de las columnas del grid
  ];

  //para cargar datos de las filas desde el servidor, para esto se utiliza el http cliente de angular
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }
}




import { Component, Input, OnInit } from '@angular/core';
import { car } from '../car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  constructor() { }

  @Input() carsList : car[] = []
  ngOnInit(): void {
  }

}

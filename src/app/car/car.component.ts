import { Component, OnInit } from '@angular/core';
import { car } from '../car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  cars : car [] = [];

  ngOnInit(): void {
    this.cars = [
      {
      name : "BMW",
      color : "Red",
      rimSize : 10
    },
    {
      name : "Polo",
      color : "Blue",
      rimSize : 30
    },
    {
      name : "Kia",
      color : "Green",
      rimSize : 20
    },
    {
      name : "Tazz",
      color : "White",
      rimSize : 40
    }
  ]
  }

}

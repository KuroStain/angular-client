import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [ CarService ]
})
export class CarDetailComponent implements OnInit {

  public title: string;
  public cars: Array<Car>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _carService: CarService,

  ) { 

    this.title = 'Vehiculos Registrados';

  }

  ngOnInit() {
    console.log('car-detail.component funcionando...');
    this._carService.getCars().subscribe(
      Response => {
        // console.log(Response);
        if(Response.status = 'success'){
          this.cars = Response.cars;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

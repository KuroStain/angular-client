import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css'],
  providers: [UserService, CarService]
})
export class CarNewComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public car: Car;
  public status_car: string;
  public status_msg: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _carService: CarService
  ) {
    this.page_title = 'Ingresar nuevo vehiculo';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit() {
    if (this.identity == null) {
      this._router.navigate(['login']);      
    }else{
      // Se crea el objeto car
      this.car = new Car(1, '', '', 0, '', null, null);
    }
  }

  onSubmit(form){
    // console.log(this.car);
    console.log(this._carService.test());
    this._carService.create(this.token, this.car).subscribe(
      response => {
        console.log('Response 1 OK');
        console.log(response.status);
        if(response.status_car = 'success'){
          console.log('Response 2 OK');
          this.status_car = response.status;
          this.car = new Car(1, '', '', 0, '', null, null);
          form.resetForm();
        }else{
          this.status_car = 'error';
          this.status_msg = response.message;
        }
      },
      error =>{
        console.log(<any>error);
      }
    );

  }

  btn_redirect(){
    this._router.navigate(['home']); 
  }

}

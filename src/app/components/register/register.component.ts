import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public status: string;
  public title: string;
  public user: User;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService

  ) { 
    this.title = 'Registrate';
    this.user = new User(1, 'ROLE_USER', '', '', '', '');
  }

  ngOnInit() {
    console.log('register.component cargando correctamente');
  }

  onSubmit(form){
    // console.log(this.user);
    // console.log(this._userService.test());
    this._userService.register(this.user).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = response.status;

          this.user = new User(1, 'ROLE_USER', '', '', '', '');
          form.resetForm();
        }else{
          this.status = 'error';
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}

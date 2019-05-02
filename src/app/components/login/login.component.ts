import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title    : string;
  public user     : User;
  public token;
  public identity;
  public status;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.title = 'Login';
    this.user = new User(1, 'ROLE_USER', '', '', '', '');
  }

  ngOnInit() {
    this.logout();
  }

  onSubmit(form){
    this._userService.singup(this.user).subscribe(
      Response => {
        if(Response.status != 'error'){
          this.status = 'success';
          // Token
          this.token = Response;
          localStorage.setItem('token', this.token);
          // console.log(Response)
          // Objeto user identificado
          this._userService.singup(this.user, true).subscribe(
            Response => {
              this.identity = Response;
              localStorage.setItem('identity', JSON.stringify(this.identity));
              // console.log(Response)            
            },
            error => {
              console.log(<any>error)
            }
          )
          this._router.navigate(['home'])
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  logout(){
    this._route.params.subscribe(params => {
      let logout = +params['sure'];

      if(logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        this._router.navigate(['home'])
      }
    })
  }

}

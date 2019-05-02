import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit, DoCheck {

  public title: string;
  public identity;
  public token;

  constructor(
    private _userService: UserService
  ) { 
    this.title = 'header'
    this.identity = this._userService.getIdentity();
    this.token    = this._userService.getToken();
  }

  ngOnInit() {
    console.log('app.component cargado');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.identity = this._userService.getIdentity();
    this.token    = this._userService.getToken();
  }

}

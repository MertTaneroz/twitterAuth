import { Component, OnInit } from '@angular/core';
import { StrapiService } from 'src/app/service/strapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  identifier:string = '';
  password:string = '';

  constructor(
    private strapiService : StrapiService
  ) { }

  ngOnInit(): void {
  }

  onChangeIdentifier(e) {
    this.identifier = e.target.value
  }

  onChangePassword(e) {
    this.password = e.target.value
  }

  login() {
    this.strapiService.login(this.identifier,this.password)
    
  }

}

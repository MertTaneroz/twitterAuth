import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StrapiService } from 'src/app/service/strapi.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private strapiService : StrapiService,
  ) {}

  get jwt () {
    return this.strapiService.jwt
  }

  ngOnInit(): void {
    console.log(this.jwt)
  }

  logout(event) {
    event.preventDefault()
    this.strapiService.logout()
  }

}

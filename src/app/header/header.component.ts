import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: any;
  statename: any;
  csvUploadtime:any
  role:any
  constructor() { }

  ngOnInit(): void {
    this.userName=localStorage.getItem('userName')
   
  }

}

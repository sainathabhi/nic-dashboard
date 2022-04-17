import { Component, OnInit } from '@angular/core';
import { DashboardreportService } from './dashboardreport.service';

@Component({
  selector: 'app-dashboardreport',
  templateUrl: './dashboardreport.component.html',
  styleUrls: ['./dashboardreport.component.scss']
})
export class DashboardreportComponent implements OnInit {
  allUserData: any = new Array()
  userdetailInJson: any = new Array()
  constructor(private http:DashboardreportService) { }

  ngOnInit() {
    this.dashBoardData();
  }
dashBoardData()
{ 
  this.http.tokenGenrate().subscribe(
    (res: any) => {
      console.log(res.refresh_token)
     this.dashboardUseData(res.access_token);
    },
    err => console.log(err)
  );
}
dashboardUseData(token:any)
{
  this.userdetailInJson=[];
  this.http.userData(token).subscribe(
  (res: any) => {
    console.log(res.result.response.content);
    this.allUserData=res.result.response.content;
    this.allUserData.forEach((y:any) =>
  {  
    var finalObj = Object.assign({"UserName": y['firstName']+' '+y['lastName']},
    {"email":y['email']},{"orgName": y.organisations[0]['orgName']},{"orgJoinDate": y.organisations[0]['orgjoindate']}); 
    this.userdetailInJson.push(finalObj);
  });
console.log(this.userdetailInJson)
  },
  err => console.log(err)
);
}

}

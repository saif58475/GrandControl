
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent implements OnInit {
  EmployeeName: string = "";
  companyId: string;



  constructor(private _Router: Router, ) {
    
  }

  ngOnInit() { }

  logout() {
    // window.location.reload(); 
    localStorage.clear();
    this._Router.navigate(["/"]);
  }
  Profile() {
    this.companyId = localStorage.getItem("");

    // this._CompanyService.Data.next(this.companyId);
  }
}

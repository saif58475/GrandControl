
 
 

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchwizardModule } from 'angular-archwizard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
 
import { RouterModule } from '@angular/router';
 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPrintElementModule } from 'ngx-print-element';
 
import { NgApexchartsModule } from 'ng-apexcharts';
 

 

// **  
import {NgxPaginationModule} from 'ngx-pagination';

// cookie 
import { CookieService } from 'ngx-cookie-service'


import { DxReportViewerModule } from 'devexpress-reporting-angular';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { ViewDestinationComponent } from './destination/view-destination/view-destination.component';
import { InsertDestinationComponent } from './destination/insert-destination/insert-destination.component';
import { ViewHotelComponent } from './Hotel/view-hotel/view-hotel.component';
import { InsertHotelComponent } from './Hotel/insert-hotel/insert-hotel.component';
import { ViewHoteldetailsComponent } from './hoteldetails/view-hoteldetails/view-hoteldetails.component';
import { InsertHoteldetailsComponent } from './hoteldetails/insert-hoteldetails/insert-hoteldetails.component';
import { ViewHotelfeatureComponent } from './hotelfeature/view-hotelfeature/view-hotelfeature.component';
import { InsertHotelfeatureComponent } from './hotelfeature/insert-hotelfeature/insert-hotelfeature.component';
import { ViewDistancetypelistComponent } from './DistanceTypeList/view-distancetypelist/view-distancetypelist.component';
import { InsertDistancetypelistComponent } from './DistanceTypeList/insert-distancetypelist/insert-distancetypelist.component';
import { ViewBoardtypelistComponent } from './BoardTypeList/view-boardtypelist/view-boardtypelist.component';
import { InsertBoardtypelistComponent } from './BoardTypeList/insert-boardtypelist/insert-boardtypelist.component';
import { ViewNationalitylistComponent } from './Nationalitylist/view-nationalitylist/view-nationalitylist.component';
import { InsertNationalitylistComponent } from './Nationalitylist/insert-nationalitylist/insert-nationalitylist.component';
import { ViewSpecialofferlistComponent } from './SpecialOfferList/view-specialofferlist/view-specialofferlist.component';
import { InsertSpecialofferlistComponent } from './SpecialOfferList/insert-specialofferlist/insert-specialofferlist.component';




 @NgModule({
  declarations: [
    ViewProductComponent,
    ViewDestinationComponent,
    InsertDestinationComponent,
    ViewHotelComponent,
    InsertHotelComponent,
    ViewHoteldetailsComponent,
    InsertHoteldetailsComponent,
    ViewHotelfeatureComponent,
    InsertHotelfeatureComponent,
    ViewDistancetypelistComponent,
    InsertDistancetypelistComponent,
    ViewBoardtypelistComponent,
    InsertBoardtypelistComponent,
    ViewNationalitylistComponent,
    InsertNationalitylistComponent,
    ViewSpecialofferlistComponent,
    InsertSpecialofferlistComponent,
    
  ],
  imports: [
    DxReportViewerModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ArchwizardModule,
    SweetAlert2Module,
    NgxPaginationModule,
    RouterModule,
    NgApexchartsModule,
    NgxPrintElementModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
   CookieService
  ],
  
  exports:[ ]
})
export class AdminModule { }

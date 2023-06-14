import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// ChangePassword Component



import { ViewProductComponent } from './product/view-product/view-product.component';
import { ViewHoteldetailsComponent } from "./hoteldetails/view-hoteldetails/view-hoteldetails.component";
import { ViewDestinationComponent } from "./destination/view-destination/view-destination.component";
import { InsertHotelComponent } from "./Hotel/insert-hotel/insert-hotel.component";
import { InsertDestinationComponent } from "./destination/insert-destination/insert-destination.component";
import { ViewHotelfeatureComponent } from "./hotelfeature/view-hotelfeature/view-hotelfeature.component";
import { InsertHotelfeatureComponent } from "./hotelfeature/insert-hotelfeature/insert-hotelfeature.component";
import { ViewHotelComponent } from "./Hotel/view-hotel/view-hotel.component";
import { ViewNationalitylistComponent } from "./Nationalitylist/view-nationalitylist/view-nationalitylist.component";
import { InsertNationalitylistComponent } from "./Nationalitylist/insert-nationalitylist/insert-nationalitylist.component";
import { ViewBoardtypelistComponent } from "./BoardTypeList/view-boardtypelist/view-boardtypelist.component";
import { InsertBoardtypelistComponent } from "./BoardTypeList/insert-boardtypelist/insert-boardtypelist.component";
import { InsertSpecialofferlistComponent } from "./SpecialOfferList/insert-specialofferlist/insert-specialofferlist.component";
import { ViewSpecialofferlistComponent } from "./SpecialOfferList/view-specialofferlist/view-specialofferlist.component";





const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "ViewProduct",
                component: ViewProductComponent,
            },
            {
                path: "ViewHotelDetails",
                component: ViewHoteldetailsComponent,
            },
            {
                path: "InsertHotelDetails",
                component: InsertHotelComponent,
            },
            {
                path: "ViewDestination",
                component: ViewDestinationComponent,
            },
            {
                path: "InsertDestination",
                component: InsertDestinationComponent,
            },
            {
                path: "ViewHotelFeatures",
                component: ViewHotelfeatureComponent,
            },
            {
                path: "InsertHotelFeatures",
                component: InsertHotelfeatureComponent,
            },
            {
                path: "ViewHotel",
                component: ViewHotelComponent,
            },
            {
                path: "InsertHotel",
                component: InsertHotelComponent,
            },
            {
                path: "ViewNationality",
                component: ViewNationalitylistComponent,
            },
            {
                path: "InsertNationality",
                component: InsertNationalitylistComponent,
            },
            {
                path: "ViewBoardTypeList",
                component: ViewBoardtypelistComponent,
            },
            {
                path: "InsertBoardTypeList",
                component: InsertBoardtypelistComponent,
            },
            {
                path: "ViewSpecialOfferList",
                component: ViewSpecialofferlistComponent,
            },
            {
                path: "InsertSpecialOfferList",
                component: InsertSpecialofferlistComponent,
            },
           
            
           
],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule { }

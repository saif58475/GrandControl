import { stringify } from "@angular/compiler/src/util";
import { Injectable, OnDestroy } from "@angular/core";
import { Subject, BehaviorSubject, fromEvent } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";

// Menu
export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search: boolean = false;

  // Language
  public language: boolean = false;

  // Mega Menu
  public megaMenu: boolean = false;
  public levelMenu: boolean = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // Full screen
  public fullScreen: boolean = false;

  constructor(private router: Router) {
    
   
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }
  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }
  MENUITEMS_andalus: Menu[] = [
    {
      headTitle1: "GRAND VOYAGES",
      headTitle2: "Management SideBar",
    },
    {
      title: "Board Type List",
      icon: "activity",
      type: "sub",
      badgeType: "success",
      children: [
        {
          path: "admin/ViewBoardTypeList",
          title: "View-Board Type List",
          type: "link",
        },
      ],
    },
    // {
    //   title: "Destination",
    //   icon: "activity",
    //   type: "sub",
    //   badgeType: "success",
    //   children: [
    //     {
    //       path: "admin/ViewDestination",
    //       title: "View-Destination",
    //       type: "link",
    //     },
    //   ],
    // },
    {
      title: "Hotel Details",
      icon: "activity",
      type: "sub",
      badgeType: "success",
      children: [
        {
          path: "admin/ViewHotelDetails",
          title: "View-Hotel Details",
          type: "link",
        },
      ],
    },
    {
      title: "Hotel Features",
      icon: "activity",
      type: "sub",
      badgeType: "success",
      children: [
        {
          path: "admin/ViewHotelFeatures",
          title: "View-Hotel Features",
          type: "link",
        },
      ],
    },
    {
      title: "Hotels",
      icon: "activity",
      type: "sub",
      badgeType: "success",
      children: [
        {
          path: "admin/ViewHotel",
          title: "View-Hotels",
          type: "link",
        },
      ],
    },
    {
      title: "Nationality List",
      icon: "activity",
      type: "sub",
      badgeType: "success",
      children: [
        {
          path: "admin/ViewNationality",
          title: "View-Nationality List",
          type: "link",
        },
      ],
    },
 
    {
      title: "Special Offer List",
      icon: "activity",
      type: "sub",
      badgeType: "success",
      children: [
        {
          path: "admin/ViewSpecialOfferList",
          title: "View-Special Offer List",
          type: "link",
        },
      ],
    },
 
  ];
// ===============
  MEGAMENUITEMS: Menu[] = [
    {
      title: "Error Pages",
      type: "sub",
      active: true,
      children: [
        {
          path: "javascript:void(0);",
          title: "Error Page 400",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Error Page 401",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Error Page 403",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Error Page 404",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Error Page 500",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Error Page 503",
          type: "extLink",
        },
      ],
    },
    {
      title: "Authentication",
      type: "sub",
      active: false,
      children: [
        { path: "javascript:void(0);", title: "Login Simple", type: "extLink" },
        {
          path: "javascript:void(0);",
          title: "Login BG Image",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Login BG Video",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Simple Register",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Register BG Image",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Register BG Video",
          type: "extLink",
        },
      ],
    },
    {
      title: "Usefull Pages",
      type: "sub",
      active: false,
      children: [
        { path: "javascript:void(0);", title: "Search Pages", type: "extLink" },
        { path: "javascript:void(0);", title: "Unlock User", type: "extLink" },
        {
          path: "javascript:void(0);",
          title: "Forgot Password",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Reset Password",
          type: "extLink",
        },
        { path: "javascript:void(0);", title: "Maintenance", type: "extLink" },
      ],
    },
    {
      title: "Email templates",
      type: "sub",
      active: false,
      children: [
        {
          path: "http://admin.pixelstrap.com/cuba/theme/basic-template.html",
          title: "Basic Email",
          type: "extTabLink",
        },
        {
          path: "http://admin.pixelstrap.com/cuba/theme/email-header.html",
          title: "Basic With Header",
          type: "extTabLink",
        },
        {
          path: "http://admin.pixelstrap.com/cuba/theme/template-email.html",
          title: "Ecomerce Template",
          type: "extTabLink",
        },
        {
          path: "http://admin.pixelstrap.com/cuba/theme/template-email-2.html",
          title: "Email Template 2",
          type: "extTabLink",
        },
        {
          path: "http://admin.pixelstrap.com/cuba/theme/ecommerce-templates.html",
          title: "Ecommerce Email",
          type: "extTabLink",
        },
        {
          path: "http://admin.pixelstrap.com/cuba/theme/email-order-success.html",
          title: "Order Success",
          type: "extTabLink",
        },
      ],
    },
    {
      title: "Coming Soon",
      type: "sub",
      active: false,
      children: [
        {
          path: "javascript:void(0);",
          title: "Coming Simple",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Coming BG Image",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Coming BG Video",
          type: "extLink",
        },
      ],
    },
  ];

  LEVELMENUITEMS: Menu[] = [
    {
      path: "javascript:void(0);",
      title: "File Manager",
      icon: "git-pull-request",
      type: "extLink",
    },
    {
      title: "Users",
      icon: "users",
      type: "sub",
      active: false,
      children: [
        {
          path: "javascript:void(0);",
          title: "All Users",
          icon: "users",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "User Profile",
          icon: "users",
          type: "extLink",
        },
        {
          path: "javascript:void(0);",
          title: "Edit Profile",
          icon: "users",
          type: "extLink",
        },
      ],
    },
    {
      path: "javascript:void(0);",
      title: "Bookmarks",
      icon: "heart",
      type: "extLink",
    },
    {
      path: "javascript:void(0);",
      title: "Calender",
      icon: "calendar",
      type: "extLink",
    },
    {
      path: "javascript:void(0);",
      title: "Social App",
      icon: "zap",
      type: "extLink",
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS_andalus);
 

  


  megaItems = new BehaviorSubject<Menu[]>(this.MEGAMENUITEMS);
  levelmenuitems = new BehaviorSubject<Menu[]>(this.LEVELMENUITEMS);
}


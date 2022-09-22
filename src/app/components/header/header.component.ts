import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "Task Tracker";
  showAddTask:boolean = false;
  subscription:Subscription;
  constructor(private uiservice:UiService, private router:Router) { 
    this.subscription = this.uiservice.onToggleINIT().subscribe((value)=>(this.showAddTask=value));
  }

  ngOnInit(): void {
    //Do Nothing
  }
  toggleAddTask(){
    this.uiservice.toggleAddTask();
  }
  hasRoute(route:string):boolean{
    return this.router.url===route;
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false;
  private subject:Subject<any> = new Subject<any>();
  constructor() { }
  toggleAddTask(){
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  onToggleINIT():Observable<any>{
    return this.subject.asObservable();
  }
}

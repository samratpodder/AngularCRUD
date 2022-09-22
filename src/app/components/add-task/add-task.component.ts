import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import * as uuid from 'uuid';
import { UiService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';
// import {tasks} from '../tasks/tasks.component'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text:string;
  day:string;
  reminder:boolean = false;
  @Output() addTaskEvent:EventEmitter<Task> = new EventEmitter();
  showAddTask:boolean = false;
  subscription:Subscription;
  constructor(private uiservice:UiService) { 
    this.subscription = this.uiservice.onToggleINIT().subscribe((val)=>(this.showAddTask=val));
  }
  toggleAddTask(){
    this.uiservice.toggleAddTask();
  }
  ngOnInit(): void {
    //Do Nothing
  }
  onSubmit(){
    if(!this.text){ 
      alert('Please add a task !');
      return;
    }
    const newTask = {
      id: uuid.v4(),
      text: this.text,
      reminder: this.reminder,
      day: this.day
    }
    this.addTaskEvent.emit(newTask);
    this.text="";
    this.day="";
    this.reminder=false;
  }
}

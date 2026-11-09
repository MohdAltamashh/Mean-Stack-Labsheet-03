import {Component} from '@angular/core';
import {StudentListComponent} from './student-list/student-list.component';
import {NoticeComponent} from './notice/notice.component';
@Component({selector:'app-root',standalone:true,imports:[StudentListComponent,NoticeComponent],template:`<h1>Nested Components</h1><app-notice></app-notice><app-student-list></app-student-list>`})
export class AppComponent {}

import {Component} from '@angular/core';
@Component({selector:'app-student',standalone:true,template:`<h2>Student Details</h2><p>Name: {{name}}</p><p>Marks: {{marks}}</p><p>Course: {{course}}</p><p>Percentage: {{marks}}%</p><p>Result: {{marks>=40?'Pass':'Fail'}}</p><p>Method: {{getResult()}}</p>`})
export class StudentComponent {name='Mohd Altamash';marks=78;course='MCA';getResult(){return this.marks>=40?'Pass':'Fail';}}

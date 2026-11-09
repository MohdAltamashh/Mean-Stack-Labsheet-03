import {Component} from '@angular/core';
@Component({selector:'app-profile',standalone:true,template:`<article class="profile"><img src="https://placehold.co/100x100" alt="Profile"><h2>{{name}}</h2><p>{{course}}</p></article>`,styles:[`.profile{max-width:280px;padding:24px;text-align:center;border-radius:14px;background:#eef5ff;font-family:Arial}.profile img{width:100px;height:100px;border-radius:50%}`]})
export class ProfileComponent {name='Mohd Altamash';course='MCA';}

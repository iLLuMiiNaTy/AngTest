import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'AngTest';
  name: String;
  age: number;
  imgSrc : string = "https://dojotaku.com/cdn/shop/articles/luffy-age.webp?v=1686482098"

  constructor(){
    this.name = "Nicolas";
    this.age = 20;
    
  }
}
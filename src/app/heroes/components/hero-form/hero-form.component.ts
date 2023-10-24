import { Component } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
     hero= new Hero(1, "Mr.fantastic", "Invisibility", "Reed Richards");
     powers = ['Invisibility', 'Sorcerer', "Strength"];

     submit(){
        console.log(this.hero);
     }
}

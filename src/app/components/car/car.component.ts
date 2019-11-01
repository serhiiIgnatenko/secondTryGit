import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string [];
  forShow: boolean = false;

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 229;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Металлик'
    };
    this.options = ["ABS", "Автопилот", "Паркинг "];
  }

  addOpt(optionPer: string) {
    this.options.unshift(optionPer);
    return false;
  }

  deleteOpt(optionName){
    console.log(optionName);
    for(let i = 0; i < this.options.length; i++){
      if(this.options[i] == optionName){
        this.options.splice(i,1);
        break;
      }
    }
  }

  showBlock(){
    this.forShow = !this.forShow;
  }

  carSelect(carName){
    if(carName == 'bmw'){
      this.name = 'BMW';
      this.speed = 300;
      this.model = 'M5';
      this.colors = {
        car: 'Красный',
        salon: 'Черный',
        wheels: 'Белый'
      };
      this.options = ["ABS", "Автопилот", "Паркинг "];
    } else if(carName == 'audi'){
      this.name = 'Audi';
      this.speed = 229;
      this.model = 'RS8';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Металлик'
      };
      this.options = ["ABS"];
    } else {
      this.name = 'Mersedes';
      this.speed = 270;
      this.model = 'C180';
      this.colors = {
        car: 'Черный',
        salon: 'Бардовый',
        wheels: 'Черный'
      };
      this.options = ["ABS", "Паркинг "];
    }
  
  }

}

interface Colors{
  car: string,
  salon: string,
  wheels: string
}

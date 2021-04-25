import { Component, OnInit } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';

@Component({
  selector: 'app-search-box-new',
  templateUrl: './search-box-new.component.html',
  styleUrls: ['./search-box-new.component.css']
})
export class SearchBoxNewComponent implements OnInit {
  

  regions: any[]=[
    {value: 'TUNIS', viewValue: 'Tunis'},
    {value: 'ARIANA', viewValue: 'Ariana'},
    {value: 'MANNOUBA', viewValue: 'La Mannouba'}
  ]; 
   //original config https://stackblitz.com/edit/ng5-slider-customised-range-slider-example-r6xpgg?file=src%2Fapp%2Fapp.component.ts
  //multi Silder Config****************
  minValue: number = 300000;
  maxValue: number = 590000;
  
  
  options: Options = {
    floor: 50000,
    ceil: 900000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        
        default:
          return "M.Tnd " + value;
      }
    }
  };
  
  
  constructor() { }

  ngOnInit(): void {
  }

}

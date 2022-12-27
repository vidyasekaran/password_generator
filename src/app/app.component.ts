import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  useLength = new FormControl();
  useLetter = new FormControl(false);
  useNumber = new FormControl(false);
  useSymbols = new FormControl(false);

 
  password ='';
  length=0;


  constructor(){
    this.password='';
    
  }

  onChangeLength(){

    this.length = this.useLength.value;
    
 

 
  
  }


  onButtonClick(){

    this.password='My password';
    console.log(`
    About to generate password with the following 

    Include Letters: ${this.useLetter.value}
    Include Numbers: ${this.useNumber}
    Include Symbols: ${this.useSymbols}
    `)

    const numbers ='1234567890';
    const letters ='abcdefghijklmnopqrstuvwxyz';
    const symbols ='!@#$%^&*()';

    let validChars = ' ';

    if(this.useLetter){
      validChars += letters;
    }

    if(this.useNumber){
      validChars += numbers; 
    }

    if(this.useSymbols){
    validChars += symbols;
    }

    let gp = '';

    for(let i=0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      gp += validChars[index];
    }
    this.password=gp;
  }

   }


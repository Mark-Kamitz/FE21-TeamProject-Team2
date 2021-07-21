import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

 contactForm = new FormGroup({
    txtName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    txtEmail: new FormControl('',[Validators.required, Validators.email]),
    txtPhone: new FormControl('',[Validators.required, Validators.minLength(5)]),
    txtMsg: new FormControl('',[Validators.required, Validators.minLength(10)]),   
  });
  
  constructor() { }

  onSubmit(){
    if(this.contactForm.valid){
      var a = this.contactForm.value;
      console.log(a)
   }
   else{
    alert("Please fill out all Fields");
   }
  }

  ngOnInit(): void {
  }
}


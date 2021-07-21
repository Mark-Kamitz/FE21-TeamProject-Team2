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

  onSubmit(customersData: any){
    if(this.contactForm.valid){
      var a = this.contactForm.value;
      alert("Thank you for your email");
      this.contactForm.reset();
   } 
   else if(customersData.txtName ===""){
    alert("Please fill out the text Fields");
   }
   else if(customersData.txtEmail ===""){
    alert("Please fill out a valid Email Adress");
   }
   else if(customersData.txtPhone ===""){
    alert("Please fill out the Phone number");
   }
   else{
    alert("Please fill out all Fields");
   }
  }
  
  ngOnInit(): void {
  }
}


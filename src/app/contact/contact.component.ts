import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  constructor(private httpClient : HttpClient){
    
  }

  buttonText = "Send Message";
  SERVER_URL = "YOUR URL HERE";

  contactForm = new UntypedFormGroup({
    Name : new UntypedFormControl(''),
    Email : new UntypedFormControl('', [
      Validators.required,
      Validators.email,
    ]),
    Message : new UntypedFormControl('', [
      Validators.required
    ])
  })

  onSubmit(){
    var data = {
      name : this.contactForm.get('Name').value,
      email : this.contactForm.get('Email').value,
      message : this.contactForm.get('Message').value
    };
    data : JSON.stringify(data);

    this.httpClient.post<any>(this.SERVER_URL, data).subscribe(
      (res) => this.buttonText = "Submitted!",
      (err) => this.buttonText = "Failed to send message"
    )
  }
}

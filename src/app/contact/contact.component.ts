import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


/*
TODO
https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html
https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/
https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/
*/


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  constructor(private httpClient : HttpClient){
    
  }

  SERVER_URL = "AWSLink"

  contactForm = new FormGroup({
    Name : new FormControl(''),
    Email : new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    Message : new FormControl('', [
      Validators.required
    ])
  })

  onSubmit(){
    const formData =  new FormData();
    formData.append('name', this.contactForm.get('Name').value);
    formData.append('email', this.contactForm.get('Email').value);
    formData.append('message', this.contactForm.get('Message').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }
}

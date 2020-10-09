import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


/*
TODO
Handle Post data
Respond to form being submitted
Fix spacing around contact form, Maybe put on a card and make a colored background, remove <br> tags
https://medium.com/@babatundelamidi/build-an-angular-contact-form-and-post-data-to-email-7b7327e56ad3
https://www.techiediaries.com/angular-formdata/

https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html
https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/
*/


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.html'],
})
export class ContactComponent {
  formControl = new FormControl('', [
    Validators.required
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}

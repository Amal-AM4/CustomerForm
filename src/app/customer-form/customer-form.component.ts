import { Component } from '@angular/core';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  submit(f: any) {
    console.log(f.value);

    let firstName: string = f.value.firstName;
    let lastName: string = f.value.lastName;
    let title: string = f.value.title;
    let company: string = f.value.company;
    let mail: string = f.value.mail;
    let phone: number = f.value.phone;
    let message: string = f.value.message;

    console.log(`Full Name: ${firstName} ${lastName}`);
    console.log(`Title: ${title}`);
    console.log(`Company: ${company}`);
    console.log(`Email: ${mail}`);
    console.log(`Contact No: ${phone}`);
    console.log(`Message: ${message}`);


    // console.log(firstName.length);

  }
}

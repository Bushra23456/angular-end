import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AddService } from '../add.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink,FormsModule,HttpClientModule,MatFormFieldModule,MatButtonModule,MatInputModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers:[AddService]
})
export class FormComponent {
  userdata = {
  name:'',
  email:'',
  password:'',
  image : ''
  }
  selected_image :File | null = null;
  


  constructor(private addService: AddService , private routes : Router){}
  fileselected(abc:any){
    this.selected_image = abc.target.files[0];
  }
  add(){
    const formval = new FormData();
    formval.append('name',this.userdata.name);
    formval.append('email',this.userdata.email);
    formval.append('password',this.userdata.password);
    formval.append('image',this.selected_image as File);
    debugger;
    if(this.userdata.name == ""||this.userdata.email == "" || this.userdata.password == "" || this.selected_image == null ){
      alert("All fields are required");
    }
    else{
      this.addService.addData(formval).subscribe( data => {
        console.log(data);
        this.routes.navigate(['/fetch'])
      })
      
    }

   
  }


}

import { Component } from '@angular/core';
import { AddService } from '../add.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-fetch',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,RouterLink,MatTableModule],
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css',
  providers: [AddService]
})
export class FetchComponent {
  public users : any;
  public newUser : any;
  constructor(public ss : AddService) { }
  ngOnInit(): void {
    this.ss.getdata().subscribe(data => {
      this.users = data;
    });
  }
  editUser(edit: any ){
    this.newUser = {...edit}
    
  }

update_data(){
  this.ss.updatedata(this.newUser).subscribe(data => {
    // this.users = data;
    this.ngOnInit();
    this.newUser = null;
  });
}
  
  deleteUser(item : number){
    if (confirm("ARE YOU SURE YOU WANT TO DELETE THIS ID?")){
    this.ss.deletedata(item).subscribe(data => {
     this.users = data;
    });
  }
  }


}

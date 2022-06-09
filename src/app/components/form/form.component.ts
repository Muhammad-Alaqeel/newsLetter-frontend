import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { SubscribtionService } from 'src/app/subscribtion.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  form!:FormGroup;
  constructor(private sub:SubscribtionService) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      name: new FormControl('',[Validators.required]),

      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.]+\\.[a-z]{2,4}$")]),

    });
  }



  addUser(){
  
const user:User={

  name:this.form.value.name,
  email:this.form.value.email,
}

console.log(user);
this.sub.addUser(user).subscribe(data=>{

  console.log(data)
})


  }
}

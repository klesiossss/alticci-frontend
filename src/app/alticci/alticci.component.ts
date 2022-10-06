import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from "@angular/forms";




@Component({
  selector: 'app-alticci',
  templateUrl: './alticci.component.html',
  styleUrls: ['./alticci.component.css']
})
export class AlticciComponent implements OnInit {


  @Input() numero!:any;



constructor (private service:SharedService) { }
  ngOnInit(): void { 
    
    this.refreshRanking(Event);
  }


    
    refreshRanking(n:any){
      let num = n.target.value;
      this.service.getAnswer(num).subscribe( (data: number) => {
        this.numero =  data;
      })
    }


    submit(){
      this.ngOnInit();

    }

}




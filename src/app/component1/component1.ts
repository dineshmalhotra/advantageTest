import {Component,OnInit,OnDestroy} from '@angular/core'
import {Service1} from './service1'
import {I1} from './types'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Dialog1} from './dialog'
@Component({
    selector:'component-1',
    templateUrl:'./component1.html'
})

export class Component1 implements OnInit,OnDestroy{
    isData:boolean = false
    images:I1[]
    constructor(private service1:Service1,private dialog:MatDialog){

    }
    ngOnInit(){
       this.getImages()   
    }

    getImages(){
         this.service1.getImages().subscribe({
             next:(data) => {
                 this.images = data;
                 this.isData = true;
             }
         })
    }

    openDialog(a:string){
        const dg = this.dialog.open(Dialog1,{
            width: '90%',
            height:'90%',
            disableClose:false,
            data:{imgUrl:a}
        })
    }
    openNTab(a:string){
        window.open(a)
    }
    ngOnDestroy(){

    }

   
}
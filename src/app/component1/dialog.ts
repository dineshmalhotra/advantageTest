import {Component,Inject,OnInit} from '@angular/core'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
    selector:'dialog-1',
    templateUrl:'./dialog.html'
})
export class Dialog1 implements OnInit{
    imgUrl:string
    constructor(private dialogRef:MatDialogRef<Dialog1>,@Inject(MAT_DIALOG_DATA) public data){
        this.imgUrl = data.imgUrl;
    }
    ngOnInit(){
        console.log(this.imgUrl)
    }

    Close(){
        this.dialogRef.close()
    }
}
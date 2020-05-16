import {Component,Input,OnInit,EventEmitter,Output} from '@angular/core'
@Component({
    selector:'component1-child',
    templateUrl:'./component1.child.html'
})
export class Component1Child implements OnInit{
    @Input() prop1:string;
    @Output() out1 = new EventEmitter<string>()
    prop2:string;
    dt:Date;
    constructor(){

    }
    ngOnInit(){
        console.log(this.prop1);
        this.prop2 = "test";
        this.dt = new Date()
    }
    fn1(){
      this.out1.emit('I have been emitted')
    }
}
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable,of} from 'rxjs'
import {IMAGES} from "./sample"
import {I1} from './types'
console.log(IMAGES)
@Injectable({
    providedIn:"root"
})
export class Service1{
    constructor(private http:HttpClient){

    }

    getImages():Observable<I1[]>{
        return of(IMAGES);
    }

}
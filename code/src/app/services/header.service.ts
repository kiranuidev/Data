import {Injectable} from '@angular/core'

@Injectable()

export class HeaderService{

    private tabs:Array<any>;

    constructor(){

        this.tabs=new Array<any>();

    }

    getTabs(){

             this.tabs=["Home","Products","Login","Register","Cart"];

             return this.tabs;

    }
}
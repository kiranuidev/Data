import { Component } from '@angular/core';
import {HeaderService} from '../services/header.service';

@Component ({
 selector : 'ness-header',
 templateUrl : './header.component.html'

})



export class HeaderComponent{

    title = "NESS TECHNOLOGIES"

    tabs:Array<string>

    selectedTab:string

    constructor(private headerSvc:HeaderService){
        
        //this.tabs=["Home","Products","Login","Register"]
        this.tabs=headerSvc.getTabs();

    }

    LoadPage(item){
            this.selectedTab=item

    }



}

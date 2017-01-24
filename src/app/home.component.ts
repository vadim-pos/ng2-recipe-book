import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rb-home',
    template: `
        <h1 style="text-align: center;">Welcome to the Recipes Book!</h1>
    `,
    styles: []
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

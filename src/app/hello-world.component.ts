import { Component } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    template: `
        <h1>
            {{title}}
        </h1>
    `,
    styles:[
        `h1{
            color:blue;
            font-size:2rem;
        }`
    ]
})

export class HelloWorldComponent{
    title="Hello World!!"
} 
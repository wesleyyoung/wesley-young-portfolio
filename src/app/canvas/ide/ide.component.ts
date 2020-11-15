import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ide',
    templateUrl: './ide.component.html',
    styleUrls: ['./ide.component.scss']
})
export class IdeComponent implements OnInit {

    public activeLines = [
        `import {Controller} from '@nestjs/common';`,
        ``,
        `@Controller({route: 'your-api'})`,
        'export class ApiController {',
        ' constructor() {',
        '',
        ' }',
        '}'
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

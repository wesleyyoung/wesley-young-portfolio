import {Component, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-ide',
    templateUrl: './ide.component.html',
    styleUrls: ['./ide.component.scss']
})
export class IdeComponent implements OnInit, OnDestroy {

    public ideStyling: HTMLScriptElement;

    public activeLines = [
        `import {Controller} from '@nestjs/common';`,
        '\r\n',
        '\r\n',
        `@Controller({route: 'your-api'})`,
        'export class ApiController {',
        '\tconstructor() {',
        '',
        '\t}',
        '}',
    ];

    constructor(
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.ideStyling = renderer.createElement('script');
        this.ideStyling.type = `text/javascript`;
        this.ideStyling.src = '/assets/js/lolight-1.4.0.min.js';

        renderer.appendChild(document.body, this.ideStyling);
    }

    ngOnDestroy(): void {
        this.renderer.removeChild(this.document.body, this.ideStyling);
    }

    ngOnInit(): void {
    }
}

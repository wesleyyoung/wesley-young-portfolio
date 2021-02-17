import {Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, OnDestroy {

    public canvasElPrivate: ElementRef;
    public terminalUser = 'wesley@your-app';
    public terminalDir = '~';
    public cmd = './create-something ';

    public currentLineIndex = 0;
    public readonly adjectives: string[] = [
        'unique',
        'genius',
        'exciting',
        'brilliant',
    ];
    public lines = [
        ...this.adjectives,
    ];
    public activeLine = '';

    public writeInterval;

    constructor(
        public ngZone: NgZone,
    ) {

    }

    ngOnDestroy(): void {
        this.writeInterval = null;
    }

    write(): void {
        const typeRate = 25;
        const typeVariation = 125;
        const waitBeforeNextStep = 1000;
        const addLetters = () => {
            const chars = this.lines[this.currentLineIndex];
            let cmdIndex = 0;
            const addChar = (char) => {
                const modifiedTypeRate = typeRate + Math.floor((Math.random() * typeVariation) + 1);
                setTimeout(() => {
                    this.activeLine += char;
                    cmdIndex++;
                    if (cmdIndex < chars.length) {
                        addChar(chars[cmdIndex]);
                    } else {
                        setTimeout(() => removeLetters(), waitBeforeNextStep);
                    }
                }, modifiedTypeRate);
            };

            addChar(chars[cmdIndex]);
        };

        const removeLetters = () => {
            this.currentLineIndex++;
            if (this.currentLineIndex > this.lines.length - 1) {
                this.currentLineIndex = 0;
            }
            const removeChar = () => {
                const modifiedTypeRate = typeRate + Math.floor((Math.random() * typeVariation) + 1);
                setTimeout(() => {
                    this.activeLine = this.activeLine.slice(0, -1);
                    if (this.activeLine.length === 0) {
                        setTimeout(() => addLetters(), waitBeforeNextStep);
                    } else {
                        removeChar();
                    }
                }, modifiedTypeRate);
            };

            removeChar();
        };

        addLetters();
    }

    ngOnInit(): void {
        this.write();
    }
}

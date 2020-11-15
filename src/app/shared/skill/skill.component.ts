import {AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DOCUMENT} from '@angular/common';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {ISkill} from '../../interface/skill';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss'],
    animations: [
        trigger('flyIn', [
            state('on-page', style({
                transform: 'translate(0, 0)',
                opacity: 1
            })),
            state('rest-left', style({
                transform: 'translate(-25%, 0)',
                opacity: 0
            })),
            state('rest-right', style({
                transform: 'translate(25%, 0)',
                opacity: 0
            })),
            transition('* => *', [
                animate('1.1s ease')
            ])
        ])
    ]
})
export class SkillComponent implements OnInit, OnDestroy, AfterViewInit {

    public bpSubscriber: Subscription;
    public isMobile = false;
    public cols = 2;
    public rowHeight = 200;
    public isInViewport: boolean;

    constructor(
        @Inject(DOCUMENT) private document: any,
        private bp: BreakpointObserver,
    ) {
        this.bpSubscriber =
            bp.observe('(max-width: 1000px)')
                .subscribe((breakpoint: BreakpointState) => {
                    this.isMobile = breakpoint.matches;
                    this.cols = this.isMobile ? 1 : 2;
                });
    }

    @ViewChild('brandBoxContainer', {static: false}) box: any;

    @ViewChild('card', {read: ElementRef}) card: ElementRef;

    @Input() i: number;

    @Input() skill: ISkill;

    @HostListener('window:scroll', []) onscroll(): void {
        const offset = this.box._element.nativeElement.offsetTop;
        const height = this.box._element.nativeElement.clientHeight;
        this.isInViewport = (window.scrollY + window.innerHeight) > (offset + (window.innerHeight * .05)) && window.scrollY - height <= offset;
    }

    @HostListener('window:resize', []) onresize(): void {
        this.setRowHeight();
    }

    public setRowHeight(): void {
        this.rowHeight = this.card.nativeElement.scrollHeight + 75;
        if (this.rowHeight <= 250) {
            this.rowHeight = 250;
        }
    }

    public isEven(n): boolean {
        return n % 2 === 0;
    }

    public openPage(url: string): void {
        this.document.location.href = url;
    }

    ngOnDestroy(): void {
        this.bpSubscriber.unsubscribe();
    }

    ngOnInit(): void {
        this.isInViewport = false;
    }

    ngAfterViewInit(): void {
        setTimeout(() => this.setRowHeight(), 250);
    }
}

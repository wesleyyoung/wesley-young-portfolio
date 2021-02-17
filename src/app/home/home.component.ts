import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import {ISkill} from '../interface/skill';
import {SKILLS} from '../static/skills';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    public cols = 3;

    public smSubscriber: Subscription;
    public bpSubscriber: Subscription;
    public skills: ISkill[] = SKILLS;

    public isMobile = false;

    constructor(
        private bp: BreakpointObserver,
    ) {
        this.smSubscriber = bp.observe('(max-width: 512px)')
            .subscribe((breakpoint: BreakpointState) => {
                this.isMobile = breakpoint.matches;
            });

        this.bpSubscriber =
            bp.observe('(max-width: 1000px)')
                .subscribe((breakpoint: BreakpointState) => {
                    this.cols = breakpoint.matches ? 1 : 3;
                });
    }

    ngOnDestroy(): void {
        this.smSubscriber.unsubscribe();
        this.bpSubscriber.unsubscribe();
    }

    ngOnInit(): void {
    }
}

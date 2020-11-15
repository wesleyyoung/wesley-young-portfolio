import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import {ISkill} from '../interface/skill';
import {SKILLS} from '../static/skills';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    public cols = 3;

    public bpSubscriber: Subscription;
    public skills: ISkill[] = SKILLS;

    constructor(
        private bp: BreakpointObserver,
    ) {
        this.bpSubscriber =
            bp.observe('(max-width: 1000px)')
                .subscribe((breakpoint: BreakpointState) => {
                    this.cols = breakpoint.matches ? 1 : 3;
                });
    }

    ngOnDestroy(): void {
        this.bpSubscriber.unsubscribe();
    }

    ngOnInit(): void {
    }
}

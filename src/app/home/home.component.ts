import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';
import {ISkill} from '../interface/skill';
import {SKILLS} from '../static/skills';
import {BuildMyDreamWebsite, LookingToHireSubject, MyEmail} from '../constants';
import {earthToColorProject, mambafiProject, perchQbProject} from '../static';
import {Project} from '../interface';

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

    public projects = [
        earthToColorProject,
        mambafiProject,
        perchQbProject,
    ];

    public lookingToHireMailText = '';
    public freelanceMailText = '';

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
        this.lookingToHireMailText = `mailto:${MyEmail}?subject=${LookingToHireSubject}`;
        this.freelanceMailText = `mailto:${MyEmail}?subject=${BuildMyDreamWebsite}`;
    }
}

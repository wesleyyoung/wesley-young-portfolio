import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';
import {Project} from '../../interface';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

    public isMobile = false;

    public smSubscriber: Subscription;

    @Input()
    public project: Project;

    constructor(
        private bp: BreakpointObserver,
    ) {
        this.smSubscriber = bp.observe('(max-width: 512px)')
            .subscribe((breakpoint: BreakpointState) => {
                this.isMobile = breakpoint.matches;
            });
    }

    ngOnInit(): void {
    }

}

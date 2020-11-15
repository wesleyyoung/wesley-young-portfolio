import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HomeComponent} from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {LayoutModule} from '@angular/cdk/layout';
import {SkillComponent} from './shared/skill/skill.component';
import {MatCardModule} from '@angular/material/card';
import {TerminalComponent} from './canvas/terminal/terminal.component';
import {PageDesignComponent} from './canvas/page-design/page-design.component';
import {IdeComponent} from './canvas/ide/ide.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SkillComponent,
        TerminalComponent,
        PageDesignComponent,
        IdeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        LayoutModule,
        MatCardModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

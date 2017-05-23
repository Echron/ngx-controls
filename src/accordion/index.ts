import {NgModule} from '@angular/core';

import {AccordionComponent} from './component/accordion.component';
import {AccordionSectionComponent} from './component/accordion-section.component';
import {AccordionSectionHeaderComponent} from './component/accordion-section-header.component';
import {AccordionSectionContentComponent} from './component/accordion-section-content.component';
import {AccordionService} from './service/accordion.service';
import {AccordionAnimationsService} from './service/accordion-animations.service';
import {AccordionEventService} from './service/accordion-event.service';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export * from './component/accordion.component';
export * from './component/accordion-section.component';
export * from './component/accordion-section-header.component';
export * from './component/accordion-section-content.component';
export * from './service/accordion.service';
export * from './service/accordion-animations.service';
export * from './service/accordion-event.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [
        AccordionComponent,
        AccordionSectionComponent,
        AccordionSectionHeaderComponent,
        AccordionSectionContentComponent
    ],
    declarations: [
        AccordionComponent,
        AccordionSectionComponent,
        AccordionSectionHeaderComponent,
        AccordionSectionContentComponent
    ],
    providers: [
        AccordionService,
        AccordionAnimationsService,
        AccordionEventService]

})
export class AccordionModule {
}

import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionModule} from './accordion/accordion.module';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AccordionModule
    ],
    exports: [
        AccordionModule
    ]
})
export class NgXControlsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgXControlsModule,
            providers: []
        };
    }
}

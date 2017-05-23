import {NgModule} from '@angular/core';
import {AccordionModule} from './accordion/index';

const CONTROL_MODULES = [
    AccordionModule
];

@NgModule({
    imports: CONTROL_MODULES,
    exports: CONTROL_MODULES
})
export class NgXControlsModule {
}


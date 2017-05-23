import {Injectable} from '@angular/core';

import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';

@Injectable()
export class AccordionAnimationsService {

    static collapsibleContentAnimation(triggerName: string): AnimationTriggerMetadata[] {
        return [
            trigger(triggerName, [
                state('*', style({
                    height: 0
                })),
                state('true', style({})),
                transition('* => true',
                    animate('0.2s ease-in-out')),
                transition('* => false',
                    animate('0.2s ease-in-out'))
            ])
        ];
    }
}

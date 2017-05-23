import {Injectable} from '@angular/core';

import {Subject} from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

export class CollapsibleEvent {
}

@Injectable()
export class AccordionEventService {

    // Observable string sources
    private toggleCollapsibleItemSource = new Subject<any>();

    // Observable string streams
    toggleCollapsibleItem$: Observable<any> = this.toggleCollapsibleItemSource.asObservable();

    // Toggle collapsible item
    toggleCollapsibleItem(event?: CollapsibleEvent) {

        this.toggleCollapsibleItemSource.next(event);
    }

    unsubscribe() {
        this.toggleCollapsibleItemSource.unsubscribe();
    }
}

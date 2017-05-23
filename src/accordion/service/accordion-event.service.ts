import {Injectable} from '@angular/core';

import {Subject} from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccordionEventService {

    private toggleCollapsibleItemSource = new Subject<any>();

    public toggleCollapsibleItem$: Observable<any> = this.toggleCollapsibleItemSource.asObservable();

    public toggleCollapsibleItem() {

        this.toggleCollapsibleItemSource.next();
    }

    public unsubscribe() {
        this.toggleCollapsibleItemSource.unsubscribe();
    }
}

import {FormControl} from '@angular/forms';

export interface IPayKind {
     payKindId?: string | FormControl;
     payKindName?: string | FormControl;
     memo ?: string | FormControl;
}

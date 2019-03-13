import {FormControl, FormGroup, Validators} from '@angular/forms';
export class CorpMsg {
   corpName: string;
   address: string  ;
   tel: string ;
   linkman: string ;


  constructor(options: {corpName?: string , address?: string, tel?: string , linkman?: string }= {}) {
    this.corpName = options.corpName || '';
    this.address = options.address || '' ;
    this.tel = options.tel || '';
    this.linkman = options.linkman || '';

  }

  formControlFactory = () => {
       return new FormGroup( {
         corpName:   new FormControl( this.corpName || '', [Validators.required ]),
         address:    new FormControl( this.address || '' , [Validators.maxLength(50) ]),
         tel    :    new FormControl( this.tel || '' , [Validators.maxLength(18) ]),
         linkman :  new FormControl(this.linkman || '' , [Validators.maxLength(20) ])
       });
  }

}

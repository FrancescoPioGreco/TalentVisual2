import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: false,
  host: {
    '(click)': 'onConfirmLogOut($event)'
  }
})
export class SafeLinkDirective {

  constructor() { }

  onConfirmLogOut(event: MouseEvent) {
    const wantsToLogOut = window.confirm('Do you want to logout?');
    
    if (wantsToLogOut) {
      return;
    }

    event.preventDefault();
  }

}

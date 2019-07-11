import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {MessageService} from './messages/message.service';
import {Message} from './messages/message.model';

@Injectable()
export class TermsGuard {
  constructor(private messages: MessageService) {
  }

  canActivate(route: ActivatedRouteSnapshot):
    Promise<boolean> | boolean {
    if (route.params.mode === 'create') {
      return new Promise<boolean>((resolve) => {
        const responses: [string, (element) => void][] = [
          ['Yes', () => resolve(true)],
          ['No', () => resolve(false)]
        ];
        this.messages.reportMessage(
          new Message('Do you accept the terms & conditions?',
            false, responses));
      });
    } else {
      return true;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot):
    Promise<boolean> | boolean {
    if (route.url.length > 0
      && route.url[route.url.length - 1].path === 'categories') {
      return new Promise<boolean>((resolve) => {
        const responses: [string, (element) => void][] = [
          ['Yes', () => resolve(true)],
          ['No ', () => resolve(false)]
        ];
        this.messages.reportMessage(
          new Message('Do you want to see the categories component?',
            false, responses));
      });
    } else {
      return true;
    }
  }
}

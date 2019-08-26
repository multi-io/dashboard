import {by, element} from 'protractor';

import {NavPage} from './nav.po';

export class ConfirmationDialog extends NavPage {
  getConfirmationDialog(): any {
    return element(by.id('km-confirmation-dialog'));
  }

  getConfirmationDialogInput(): any {
    return element(by.id('km-confirmation-dialog-input'));
  }

  getConfirmationDialogConfirmBtn(): any {
    return element(by.id('km-confirmation-dialog-confirm-btn'));
  }
}
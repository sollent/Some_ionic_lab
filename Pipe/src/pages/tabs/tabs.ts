import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { CalculatePage } from '../calculate/calculate';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab3Root = ContactPage;
  tab5Root = CalculatePage;

  constructor() {

  }
}

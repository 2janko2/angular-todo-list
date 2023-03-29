import {Component} from '@angular/core';

import {NzDrawerPlacement} from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  visible = false;
  placement: NzDrawerPlacement = 'right';

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}

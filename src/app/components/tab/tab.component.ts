import { Component, EventEmitter, Output } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers: [MatTabsModule]
})
export class TabComponent {
  @Output() tabchange = new EventEmitter<void>();
  active: number = 0;
constructor(private router: Router) { }
  
  onTabChanged(event:any) {
      this.active = event;
      this.tabchange.emit(event);
  }
}

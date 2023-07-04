import { Component, EventEmitter, Output } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers: [MatTabsModule]
})
export class TabComponent {
  @Output() tabchange = new EventEmitter<void>();
  active: number = 0;

  
  onTabChanged(event:any) {
    this.tabchange.emit();
  }

}

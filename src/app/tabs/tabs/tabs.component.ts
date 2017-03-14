import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor() {}
  ngOnInit() {}
  // ContentChildren sind erst mit ngAfterContentInit da
  ngAfterContentInit () {
    this.select(this.tabs.first)
  }

  select(tab: TabComponent){
    this.tabs.forEach(currentTab => currentTab.selected = currentTab === tab);
    // this.tabs.forEach(tab => tab.selected = false);
    // tab.selected = true;
  }
}

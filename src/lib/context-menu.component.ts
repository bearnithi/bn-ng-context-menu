import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bn-ng-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  @Input() showContextMenu: boolean = false;
  @Input() appendTo: HTMLElement;
  @Input() menu: Array<any> = [];
  @Output() onContextClick = new EventEmitter<any>();

  public offsetTop: string = '0px';
  public offsetLeft: string = '0px';

    
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }


  @HostListener('window:contextmenu', ['$event'])
  getContextMenuPosition(e) {
    e.preventDefault();
    if(this.showContextMenu) {
      this.offsetLeft = `${e.pageX}px`;
      this.offsetTop = `${e.pageY}px`;
    }
  }


  contextClick(menuItem) {
    this.onContextClick.emit(menuItem);
  }


}

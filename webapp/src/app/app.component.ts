import {AfterContentInit, Component} from '@angular/core';
import * as mdc from 'material-components-web'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit{
  drawer: any;
  active = 0;

  title = 'FUTBOLDESA';

  constructor(){
  }

  menus = [
    {name: "Home", link: "home"},
    {name: "Partidos", link: "game"}
  ];

  ngAfterContentInit(): void {
    // this.setDevice();
    let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
    document.querySelector('.menu').addEventListener('click', () => drawer.open = true);
  }

  activate(index: number) {
    this.active = index;
  }
}

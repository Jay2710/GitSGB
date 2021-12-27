import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private _isCollapsed: boolean = true;
  set isCollapsed(value) {
    this._isCollapsed = value;
  }
  get isCollapsed() {
    if (this.collapseRef) {
      // temp fix for "overflow: hidden"
      if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
        this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
      }
    }
    return this._isCollapsed;
  }

  @ViewChild(CollapseDirective, { read: ElementRef, static: false }) collapse !: CollapseDirective;

  collapseRef: any;

  constructor(
    private renderer: Renderer2,
    public authenticationservice: AuthenticationService
  ) { }

  ngOnInit() { }

  ngAfterViewChecked(): void {
    this.collapseRef = this.collapse;
  }
}

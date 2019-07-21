import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame-logo',
  template: `
      <div class="frame-logo" (click)="toHome()">
          <embed src="assets/img/chainbank_logo.svg" width="40" height="40"
                 type="image/svg+xml"
                 pluginspage="http://www.adobe.com/svg/viewer/install/" />
          <embed src="assets/img/chainbank_title.svg" width="156" height="48"
                 type="image/svg+xml"
                 pluginspage="http://www.adobe.com/svg/viewer/install/" />
      </div>
  `,
  styles: [`
    .frame-logo {
      padding: 0;
      position: fixed;
      top: 8px;
      left: 16px;
      width: 88px;
      height: 48px;
      -webkit-app-region: no-drag;
      cursor: pointer;
      z-index: 100;
    }
    .frame-logo > embed:nth-child(1) {
        display: block;
        position: absolute;
        top: 12px;
        left: 16px;
        height: 40px;
        width: 40px;
        font-weight: bolder;
    }
    .frame-logo > embed:nth-child(2) {
        display: block;
        position: absolute;
        top: 8px;
        left: 56px;
        height: 48px;
    }
  `]
})
export class FrameLogoComponent {

  constructor(
    private readonly router: Router,
  ) { }

  toHome() {
    this.router.navigateByUrl('/');
  }
}
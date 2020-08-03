import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-exemplo-iframe',
  templateUrl: './exemplo-iframe.component.html',
  styleUrls: ['./exemplo-iframe.component.scss']
})
export class ExemploIframeComponent implements OnInit {

  trustedUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.oleconsignado.com.br');
  }

}

import { Pipe,PipeTransform } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

@Pipe({name: 'generateDownloadurl', pure: false})
export class generateDownloadurl implements PipeTransform{
  constructor(private sanitizer:DomSanitizationService){}

  transform(pagina) {
    let data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pagina));
    return this.sanitizer.bypassSecurityTrustUrl(data);
  }
}

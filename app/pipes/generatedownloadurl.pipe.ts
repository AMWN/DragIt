import { Pipe,PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'generateDownloadurl', pure: false})
export class generateDownloadurl implements PipeTransform{
  constructor(private sanitizer:DomSanitizer ){}

  transform(pagina) {
    let data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pagina));
    return this.sanitizer.bypassSecurityTrustUrl(data);
  }
}

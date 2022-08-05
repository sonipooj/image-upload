import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './drag-drop.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  files: FileHandle[] = [];

  constructor(private sanitizer: DomSanitizer) { }
  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }
  onImageUpload(event): void{
    const file = event.target.files[0];
    const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    this.files.push({ file, url });
  }

}

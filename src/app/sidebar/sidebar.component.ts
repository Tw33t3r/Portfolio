import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  scroll(el: HTMLElement){
    el.scrollIntoView({behavior:"smooth"});
  }

  downloadResume(){
    let link = document.createElement("a");
    link.download = "Garrett-Tvedt-Resume.pdf";
    link.href = "assets/resume.pdf";
    link.click();
    link.remove();
  }
}

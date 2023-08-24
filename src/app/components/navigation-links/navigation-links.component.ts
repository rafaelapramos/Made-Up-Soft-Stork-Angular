import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  text1: string = 'Features'
  @Input()
  text2: string = 'Pricing'
  @Input()
  text3: string = 'Team'
  @Input()
  text4: string = 'Blog'
  @Input()
  text: string = 'About'
  @Input()
  rootClassName: string = ''
  constructor() {}
}

import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawt8oj: string = ' '
  rawehot: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Made Up Soft Stork')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Made Up Soft Stork',
      },
    ])
  }
}

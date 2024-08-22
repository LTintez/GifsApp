import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './gifs/components/sidebar/sidebar.component';
import { SearcherComponent } from './gifs/components/searcher/searcher.component';
import { GifItemComponent } from './gifs/components/gif-item/gif-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    SearcherComponent,
    GifItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GifsApp';
}

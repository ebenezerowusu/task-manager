import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  @Input() color = 'default';
  @Input() size = 'sm';

  get loaderClasses(): string {
    return `outLoader ${this.size} ${this.color}`;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { DictionaryApiService } from '../services/dictionary-api.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  constructor(private readonly dictService: DictionaryApiService) {}
  ngOnInit(): void {
    this.dictService.getDict().subscribe((data) => console.log('DICT', data));
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  records: any;
  @Input() color: string;

  constructor() {}

  ngOnInit(): void {
    fetch('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
      .then(res => res.json())
      .then(json => {
        this.records = json.map(item => ({ id: item.id }));
      })
      .then(() => this.fillRecords());
  }

  fillRecords() {
    this.records.forEach(item => {
      // 
      document.documentElement.style.setProperty(`--vehicle${item.id}-base-color`, '#f7f7f7');
    })
  }
}

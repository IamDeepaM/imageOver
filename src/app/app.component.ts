import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imgUrl: String;
  description: String;

  onDataOver(event) {
    const vm = this;
    vm.imgUrl = event.target.attributes.link.value;
    vm.description = event.target.attributes.desc.value;
  }

  onClear() {
    const vm = this;
    vm.description = '';
    vm.imgUrl = null;
  }
}

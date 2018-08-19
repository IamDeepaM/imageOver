import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

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

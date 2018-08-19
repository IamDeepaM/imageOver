import { Component } from '@angular/core';

@Component({
  selector: 'app-surgical',
  templateUrl: './surgical.component.html',
  styleUrls: ['./surgical.component.css']
})
export class SurgicalComponent {

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

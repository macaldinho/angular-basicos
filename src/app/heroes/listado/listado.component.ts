import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["Spriderman", "Ironman", "Hulk", "Thor", "Capitan America"];
  heroeBorrado: string = "";

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || "";
    // this.heroes.shift();
  }
}

import "zone.js/dist/zone"
import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { bootstrapApplication } from "@angular/platform-browser"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Olá {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
     Aprenda mais sobre o Angular.
    </a>
  `,
})
export class App {
  name = "Vítor"
}

bootstrapApplication(App)

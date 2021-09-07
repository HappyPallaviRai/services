import { Component } from "@angular/core";
import { UserService } from "./user.service";
import { CounterService } from "./counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private counterServ: CounterService
  ) {
    this.counterServ.counter.subscribe((num: number) => (this.counter = num));
  }
  activeUsers = this.userService.activeUsers;
  inactiveUsers = this.userService.inactiveUsers;
  counter: number;
}

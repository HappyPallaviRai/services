import { Injectable, EventEmitter } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CounterService {
  counter = new EventEmitter<number>();
}

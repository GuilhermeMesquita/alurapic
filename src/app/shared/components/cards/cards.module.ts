import { NgModule } from "@angular/core";
import { CardsComponent } from "./cards.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CardsComponent],
    exports: [CardsComponent],
    imports: [CommonModule]
})

export class CardsModule { }
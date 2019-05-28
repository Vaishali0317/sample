import { MathService } from "./math.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SimpComponent } from "./simp/simp.component";

@NgModule({
  declarations: [AppComponent, SimpComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MathService],
  bootstrap: [AppComponent],
  exports: [SimpComponent]
})
export class AppModule {}

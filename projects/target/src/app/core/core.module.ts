import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { FooterComponent } from "./layout/components/footer/footer.component";
import { SideNavComponent } from "./layout/components/side-nav/side-nav.component";
import { TopBarComponent } from "./layout/components/top-bar/top-bar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    SideNavComponent,
    TopBarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class CoreModule {}

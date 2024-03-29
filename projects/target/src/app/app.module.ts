import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HighchartsChartModule } from "highcharts-angular";


// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// // Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ToolsModule } from "projects/tools/src/public-api";
import { CoreModule } from "./core/core.module";

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HighchartsChartModule,
    FusionChartsModule,
    ToolsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

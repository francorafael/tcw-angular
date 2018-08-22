import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { TcwApiConfigService } from "./tcw-api.config";

/**
 * Módulo TCW API
 * TwcApiServiceModule
 * @author Rafael Franco <rafael.franco@bevicred.com.br>
 */
@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        TcwApiConfigService
        
    ]
})
export class TwcApiServiceModule { }

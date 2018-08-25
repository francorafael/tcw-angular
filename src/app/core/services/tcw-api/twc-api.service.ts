
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TcwApiConfigService } from './tcw-api.config';


/**
 * TwcApiService
 * 
 * Serviço de consumo da pos-api
 * @author Rafael Franco <rafael@joyaweb.com.br>
 */
@Injectable()
export class TwcApiService {
    /**
     * httpClient
     * 
     * Cliente Http que será utilizado para realizar as
     * requisições contra o servidor.
     */
    private httpClient: HttpClient;

    /**
     * tcwApiConfigService
     * 
     * Serviço de configuração da API do point-of-sale.
     */
    private tcwApiConfigService: TcwApiConfigService;

    /**
     * constructor
     * @param httpClient 
     * @param tcwApiConfigService 
     */
    public constructor(httpClient: HttpClient, tcwApiConfigService: TcwApiConfigService) {
        this.httpClient = httpClient;
        this.tcwApiConfigService = tcwApiConfigService;
    }

    /**
     * getApiAddress
     */
    public getApiAddress(): string {
        return this.tcwApiConfigService.getConfig()[window.location.hostname].address;
    }

    /**
     * getOptions
     */
    public getOptions(): any {

        let options = {};

        options = {
            headers: {
                Accept: 'application/json'
            }
        };

        return options;
    }

    /**
     * post
     * 
     * @param apiAddress 
     * @param data 
     */
    public post(apiAddress: string, data: {}): Observable<Object> {
        return this.httpClient.post(this.getApiAddress() + apiAddress, data, this.getOptions());
    }

    /**
     * put
     * @param apiAddress 
     * @param data 
     */
    public put(apiAddress: string, data: {}): Observable<Object> {
        return this.httpClient.put(this.getApiAddress() + apiAddress, data, this.getOptions());
    }

    /**
     * delete
     * @param apiAddress 
     */
    public delete(apiAddress: string): Observable<Object> {
        return this.httpClient.delete(this.getApiAddress() + apiAddress, this.getOptions());
    }

    /**
     * get
     * 
     * @param apiAddress 
     * @param data 
     */
    public get(apiAddress: string): Observable<Object> {
        return this.httpClient.get(this.getApiAddress() + apiAddress, this.getOptions());
    }

    
}
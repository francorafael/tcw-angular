
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TcwApiConfigService } from './tcw-api.config';


/**
 * TwcApiService
 // tslint:disable-next-line:no-trailing-whitespace
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
     * Código do usuario para filtrar os dados na API
     * @var codeUser 
     */
    public codeUser: number = 1;

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
     * api/posts/store
     * @param apiAddress 
     * @param data 
     */
    public post(apiAddress: string, data:any): Observable<Object> {
        data.code = this.codeUser;
        return this.httpClient.post(this.getApiAddress() + apiAddress, data, this.getOptions());
    }

    /**
     * put
     * api/posts/update/ 3 = id do post
     * @param apiAddress 
     * @param id 
     * @param data 
     */
    public put(apiAddress: string, id: number, data: any): Observable<Object> {
        data.code = this.codeUser;
        return this.httpClient.put(this.getApiAddress() + apiAddress + "/" + id, data, this.getOptions());
    }

    /**
     * delete
     * api/posts/destroy/ 3 = id do post
     * @param apiAddress 
     * @param id 
     */
    public delete(apiAddress: string, id: number): Observable<Object> {
        return this.httpClient.delete(this.getApiAddress() + apiAddress + "/" + id, this.getOptions());
    }

    /**
     * get
     * api/posts/getAllWithCode/1  = code do user
     * @param apiAddress 
     * @param data 
     */
    public get(apiAddress: string): Observable<Object> {
        return this.httpClient.get(this.getApiAddress() + apiAddress+"/"+this.codeUser, this.getOptions());
    }

    /**
     * show
     * api/posts/showWithCode/1/1 - code user - id do post
     * @param apiAddress 
     * @param data 
     */
    public show(apiAddress: string,  id: number): Observable<Object> {
        return this.httpClient.get(this.getApiAddress() + apiAddress+"/"+this.codeUser+"/"+id, this.getOptions());
    }


}
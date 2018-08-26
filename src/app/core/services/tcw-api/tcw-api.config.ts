import { Injectable } from "@angular/core";

/**
 * Configurações de endpoint de API de acordo com o ambiente.
 */
const config = 
{
    'localhost' : {
        address: 'https://twc-api.herokuapp.com/api/'
    }
};

/**
 * Arquivo de configuração de URL da API.
 * TcwApiConfigService
 * @author Rafael Franco <rafael@joyaweb.com.br>
 */
@Injectable()
export class TcwApiConfigService
{
    public getConfig()
    {
        return config;
    }
}
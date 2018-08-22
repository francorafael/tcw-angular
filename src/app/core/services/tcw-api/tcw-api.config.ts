import { Injectable } from "@angular/core";

/**
 * Configurações de endpoint de API de acordo com o ambiente.
 */
const config = 
{
    'localhost' : {
        address: 'http://192.168.88.101'
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
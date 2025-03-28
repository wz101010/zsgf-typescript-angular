/**
 * 全部  API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CurrencyConsumeRequest } from '../model/models';
import { ExchangeCurrencyRequest } from '../model/models';
import { JObjectApiResult } from '../model/models';
import { RechargePointRequest } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface UserCurrenciesRequestParams {
    id: number;
    appKey: string;
}

export interface UserCurrencyConsumeRequestParams {
    nonce: string;
    timestamp: number;
    signature: string;
    appKey: string;
    currencyConsumeRequest?: CurrencyConsumeRequest;
}

export interface UserCurrencyExchangeRequestParams {
    nonce: string;
    timestamp: number;
    signature: string;
    appKey: string;
    exchangeCurrencyRequest?: ExchangeCurrencyRequest;
}

export interface UserCurrencyRechargeRequestParams {
    nonce: string;
    timestamp: number;
    signature: string;
    appKey: string;
    rechargePointRequest?: RechargePointRequest;
}

export interface UserCurrencyTransactionsRequestParams {
    appKey: string;
    transType?: string;
    curCode?: string;
    startTime?: string;
    endTime?: string;
    skip?: number;
    take?: number;
}


export interface UserCurrencyServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 资产
     * 
* @param requestParameters
     */
    userCurrencies(requestParameters: UserCurrenciesRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 消费虚拟币
     * 
* @param requestParameters
     */
    userCurrencyConsume(requestParameters: UserCurrencyConsumeRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 兑换虚拟币
     * 
* @param requestParameters
     */
    userCurrencyExchange(requestParameters: UserCurrencyExchangeRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 充值虚拟币
     * 
* @param requestParameters
     */
    userCurrencyRecharge(requestParameters: UserCurrencyRechargeRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 虚拟币交易记录
     * 
* @param requestParameters
     */
    userCurrencyTransactions(requestParameters: UserCurrencyTransactionsRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

}

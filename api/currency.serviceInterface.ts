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

import { Currency } from '../model/models';
import { ExchangeRatePutRequest } from '../model/models';
import { JObjectApiResult } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface CurrenciesRequestParams {
    appKey: string;
}

export interface CurrencyRequestParams {
    id: number;
    appKey: string;
}

export interface CurrencyDeleteRequestParams {
    id: number;
    appKey: string;
}

export interface CurrencyExchangeRateDeleteRequestParams {
    id: number;
    appKey: string;
}

export interface CurrencyExchangeRatePutRequestParams {
    code: string;
    appKey: string;
    exchangeRatePutRequest?: ExchangeRatePutRequest;
}

export interface CurrencyExchangeRatesRequestParams {
    code: string;
    appKey: string;
}

export interface CurrencyPostRequestParams {
    appKey: string;
    currency?: Currency;
}

export interface CurrencyPutRequestParams {
    id: number;
    appKey: string;
    currency?: Currency;
}

export interface CurrencyTransactionsRequestParams {
    appKey: string;
    userId?: number;
    transType?: string;
    curCode?: string;
    startTime?: string;
    endTime?: string;
    skip?: number;
    take?: number;
}


export interface CurrencyServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 货币列表
     * 
* @param requestParameters
     */
    currencies(requestParameters: CurrenciesRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 货币详情
     * 
* @param requestParameters
     */
    currency(requestParameters: CurrencyRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 删除货币
     * 
* @param requestParameters
     */
    currencyDelete(requestParameters: CurrencyDeleteRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 删除汇率
     * 
* @param requestParameters
     */
    currencyExchangeRateDelete(requestParameters: CurrencyExchangeRateDeleteRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 更新汇率
     * 
* @param requestParameters
     */
    currencyExchangeRatePut(requestParameters: CurrencyExchangeRatePutRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 汇率列表
     * 
* @param requestParameters
     */
    currencyExchangeRates(requestParameters: CurrencyExchangeRatesRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 创建货币
     * 
* @param requestParameters
     */
    currencyPost(requestParameters: CurrencyPostRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 更新货币
     * 
* @param requestParameters
     */
    currencyPut(requestParameters: CurrencyPutRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 货币交易记录
     * 
* @param requestParameters
     */
    currencyTransactions(requestParameters: CurrencyTransactionsRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

}

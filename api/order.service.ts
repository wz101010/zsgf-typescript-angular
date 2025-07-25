/**
 * 全部 API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { CreateOrderRequest } from '../model/createOrderRequest';
// @ts-ignore
import { CreateOrderResultApiResponse } from '../model/createOrderResultApiResponse';
// @ts-ignore
import { OrderApiResponse } from '../model/orderApiResponse';
// @ts-ignore
import { OrderListResultApiResponse } from '../model/orderListResultApiResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { BaseService } from '../api.base.service';
import {
    OrderServiceInterface,
    OrderRequestParams,
    OrderCreateRequestParams,
    OrdersRequestParams
} from './order.serviceInterface';



@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService implements OrderServiceInterface {

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string|string[], @Optional() configuration?: Configuration) {
        super(basePath, configuration);
    }

    /**
     * 获取订单详情
     * 根据订单ID获取订单详情
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public order(requestParameters: OrderRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<OrderApiResponse>;
    public order(requestParameters: OrderRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<OrderApiResponse>>;
    public order(requestParameters: OrderRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<OrderApiResponse>>;
    public order(requestParameters: OrderRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const id = requestParameters?.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling order.');
        }
        const appKey = requestParameters?.appKey;
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling order.');
        }

        let localVarHeaders = this.defaultHeaders;

        // authentication (Bearer) required
        localVarHeaders = this.configuration.addCredentialToHeaders('Bearer', 'Authorization', localVarHeaders, 'Bearer ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/Order/${this.configuration.encodeParam({name: "appKey", value: appKey, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}`;
        return this.httpClient.request<OrderApiResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 创建订单
     * 根据请求参数创建订单
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public orderCreate(requestParameters: OrderCreateRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<CreateOrderResultApiResponse>;
    public orderCreate(requestParameters: OrderCreateRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<CreateOrderResultApiResponse>>;
    public orderCreate(requestParameters: OrderCreateRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<CreateOrderResultApiResponse>>;
    public orderCreate(requestParameters: OrderCreateRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const appKey = requestParameters?.appKey;
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling orderCreate.');
        }
        const createOrderRequest = requestParameters?.createOrderRequest;

        let localVarHeaders = this.defaultHeaders;

        // authentication (Bearer) required
        localVarHeaders = this.configuration.addCredentialToHeaders('Bearer', 'Authorization', localVarHeaders, 'Bearer ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/Order/${this.configuration.encodeParam({name: "appKey", value: appKey, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/Create`;
        return this.httpClient.request<CreateOrderResultApiResponse>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createOrderRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 获取订单列表
     * 根据查询条件获取订单列表
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public orders(requestParameters: OrdersRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<OrderListResultApiResponse>;
    public orders(requestParameters: OrdersRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<OrderListResultApiResponse>>;
    public orders(requestParameters: OrdersRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<OrderListResultApiResponse>>;
    public orders(requestParameters: OrdersRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const appKey = requestParameters?.appKey;
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling orders.');
        }
        const status = requestParameters?.status;
        const orderNo = requestParameters?.orderNo;
        const tradeNo = requestParameters?.tradeNo;
        const userId = requestParameters?.userId;
        const pctType = requestParameters?.pctType;
        const pctId = requestParameters?.pctId;
        const pctName = requestParameters?.pctName;
        const skip = requestParameters?.skip;
        const take = requestParameters?.take;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>status, 'status');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>orderNo, 'orderNo');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>tradeNo, 'tradeNo');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>userId, 'userId');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>pctType, 'pctType');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>pctId, 'pctId');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>pctName, 'pctName');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>skip, 'skip');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>take, 'take');

        let localVarHeaders = this.defaultHeaders;

        // authentication (Bearer) required
        localVarHeaders = this.configuration.addCredentialToHeaders('Bearer', 'Authorization', localVarHeaders, 'Bearer ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/Order/${this.configuration.encodeParam({name: "appKey", value: appKey, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<OrderListResultApiResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

}

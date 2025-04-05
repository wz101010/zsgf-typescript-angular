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

import { AlipayCreateOrderPagePayRequest } from '../model/models';
import { AlipayCreateOrderRequest } from '../model/models';
import { AlipayCreateOrderWapPayRequest } from '../model/models';
import { AlipayTradeQueryResponseApiResponse } from '../model/models';
import { AlipayTradeRefundResponseApiResponse } from '../model/models';
import { BooleanApiResponse } from '../model/models';
import { ReturnPageNotifyRequest } from '../model/models';
import { StringApiResponse } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface AlipayCreateOrderRequestParams {
    appKey: string;
    alipayCreateOrderRequest?: AlipayCreateOrderRequest;
}

export interface AlipayCreateOrderPagePayRequestParams {
    appKey: string;
    alipayCreateOrderPagePayRequest?: AlipayCreateOrderPagePayRequest;
}

export interface AlipayCreateOrderWapPayRequestParams {
    appKey: string;
    alipayCreateOrderWapPayRequest?: AlipayCreateOrderWapPayRequest;
}

export interface AlipayOrderDetailRequestParams {
    appKey: string;
    orderNo?: string;
}

export interface AlipayOrderRefundRequestParams {
    appKey: string;
    amount?: string;
    orderNo?: string;
}

export interface AlipayReturnPageNotifyRequestParams {
    appKey: string;
    returnPageNotifyRequest?: ReturnPageNotifyRequest;
}


export interface AlipayServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 创建订单 - 当面付
     * 创建一个当面付订单，并返回支付二维码。
* @param requestParameters
     */
    alipayCreateOrder(requestParameters: AlipayCreateOrderRequestParams, extraHttpRequestParams?: any): Observable<StringApiResponse>;

    /**
     * 创建订单 - PC支付
     * 创建一个PC支付订单，并返回支付页面。
* @param requestParameters
     */
    alipayCreateOrderPagePay(requestParameters: AlipayCreateOrderPagePayRequestParams, extraHttpRequestParams?: any): Observable<StringApiResponse>;

    /**
     * 创建订单 - WAP支付
     * 创建一个WAP支付订单，并返回支付页面。
* @param requestParameters
     */
    alipayCreateOrderWapPay(requestParameters: AlipayCreateOrderWapPayRequestParams, extraHttpRequestParams?: any): Observable<StringApiResponse>;

    /**
     * 订单详情
     * 查询订单详情，包括订单状态和支付信息。
* @param requestParameters
     */
    alipayOrderDetail(requestParameters: AlipayOrderDetailRequestParams, extraHttpRequestParams?: any): Observable<AlipayTradeQueryResponseApiResponse>;

    /**
     * 订单退款
     * 对指定订单进行退款操作。
* @param requestParameters
     */
    alipayOrderRefund(requestParameters: AlipayOrderRefundRequestParams, extraHttpRequestParams?: any): Observable<AlipayTradeRefundResponseApiResponse>;

    /**
     * 支付成功同步通知
     * 处理支付宝支付成功的同步通知。
* @param requestParameters
     */
    alipayReturnPageNotify(requestParameters: AlipayReturnPageNotifyRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

}

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
import { AppUserConsentModelListApiResponse } from '../model/appUserConsentModelListApiResponse';
// @ts-ignore
import { AuthorizeResultApiResponse } from '../model/authorizeResultApiResponse';
// @ts-ignore
import { BooleanApiResponse } from '../model/booleanApiResponse';
// @ts-ignore
import { GrantRequest } from '../model/grantRequest';
// @ts-ignore
import { GrantResultApiResponse } from '../model/grantResultApiResponse';
// @ts-ignore
import { ProfileResultApiResponse } from '../model/profileResultApiResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { BaseService } from '../api.base.service';
import {
    OAuthServiceInterface,
    OAuthAuthorizeRequestParams,
    OAuthConsentsRequestParams,
    OAuthDeleteConsentRequestParams,
    OAuthGrantCodeRequestParams,
    OAuthProfileRequestParams
} from './oAuth.serviceInterface';



@Injectable({
  providedIn: 'root'
})
export class OAuthService extends BaseService implements OAuthServiceInterface {

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string|string[], @Optional() configuration?: Configuration) {
        super(basePath, configuration);
    }

    /**
     * 获取访问令牌
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public oAuthAuthorize(requestParameters: OAuthAuthorizeRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<AuthorizeResultApiResponse>;
    public oAuthAuthorize(requestParameters: OAuthAuthorizeRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<AuthorizeResultApiResponse>>;
    public oAuthAuthorize(requestParameters: OAuthAuthorizeRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<AuthorizeResultApiResponse>>;
    public oAuthAuthorize(requestParameters: OAuthAuthorizeRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const appKey = requestParameters?.appKey;
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling oAuthAuthorize.');
        }
        const scheme = requestParameters?.scheme;
        const code = requestParameters?.code;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>scheme, 'scheme');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>code, 'code');

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

        let localVarPath = `/OAuth/${this.configuration.encodeParam({name: "appKey", value: appKey, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/Authorize`;
        return this.httpClient.request<AuthorizeResultApiResponse>('post', `${this.configuration.basePath}${localVarPath}`,
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

    /**
     * 获取授权记录
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public oAuthConsents(requestParameters: OAuthConsentsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<AppUserConsentModelListApiResponse>;
    public oAuthConsents(requestParameters: OAuthConsentsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<AppUserConsentModelListApiResponse>>;
    public oAuthConsents(requestParameters: OAuthConsentsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<AppUserConsentModelListApiResponse>>;
    public oAuthConsents(requestParameters: OAuthConsentsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const appKey = requestParameters?.appKey;
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling oAuthConsents.');
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

        let localVarPath = `/OAuth/${this.configuration.encodeParam({name: "appKey", value: appKey, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/Consents`;
        return this.httpClient.request<AppUserConsentModelListApiResponse>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * 删除授权记录
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public oAuthDeleteConsent(requestParameters: OAuthDeleteConsentRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<BooleanApiResponse>;
    public oAuthDeleteConsent(requestParameters: OAuthDeleteConsentRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<BooleanApiResponse>>;
    public oAuthDeleteConsent(requestParameters: OAuthDeleteConsentRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<BooleanApiResponse>>;
    public oAuthDeleteConsent(requestParameters: OAuthDeleteConsentRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const id = requestParameters?.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling oAuthDeleteConsent.');
        }
        const appKey = requestParameters?.appKey;
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling oAuthDeleteConsent.');
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

        let localVarPath = `/OAuth/${this.configuration.encodeParam({name: "appKey", value: appKey, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/Consents/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}`;
        return this.httpClient.request<BooleanApiResponse>('delete', `${this.configuration.basePath}${localVarPath}`,
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
     * 获取授权码
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public oAuthGrantCode(requestParameters: OAuthGrantCodeRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<GrantResultApiResponse>;
    public oAuthGrantCode(requestParameters: OAuthGrantCodeRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<GrantResultApiResponse>>;
    public oAuthGrantCode(requestParameters: OAuthGrantCodeRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<GrantResultApiResponse>>;
    public oAuthGrantCode(requestParameters: OAuthGrantCodeRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const appKey = requestParameters?.appKey;
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling oAuthGrantCode.');
        }
        const scheme = requestParameters?.scheme;
        const grantRequest = requestParameters?.grantRequest;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>scheme, 'scheme');

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

        let localVarPath = `/OAuth/${this.configuration.encodeParam({name: "appKey", value: appKey, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/GrantCode`;
        return this.httpClient.request<GrantResultApiResponse>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: grantRequest,
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

    /**
     * 获取用户资料
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public oAuthProfile(requestParameters: OAuthProfileRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<ProfileResultApiResponse>;
    public oAuthProfile(requestParameters: OAuthProfileRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<ProfileResultApiResponse>>;
    public oAuthProfile(requestParameters: OAuthProfileRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<ProfileResultApiResponse>>;
    public oAuthProfile(requestParameters: OAuthProfileRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const appKey = requestParameters?.appKey;
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling oAuthProfile.');
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

        let localVarPath = `/OAuth/${this.configuration.encodeParam({name: "appKey", value: appKey, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/Profile`;
        return this.httpClient.request<ProfileResultApiResponse>('get', `${this.configuration.basePath}${localVarPath}`,
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

}

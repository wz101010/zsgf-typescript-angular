/**
 * 全部 API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { AppSetting } from '../model/models';
import { AppSettingApiResponse } from '../model/models';
import { AppSettingGroupPostResultApiResponse } from '../model/models';
import { AppSettingItemPostResultApiResponse } from '../model/models';
import { AppSettingListApiResponse } from '../model/models';
import { AppSettingProviderPostResultApiResponse } from '../model/models';
import { AppSettingSettingPostResultApiResponse } from '../model/models';
import { BooleanApiResponse } from '../model/models';
import { ServiceGroup } from '../model/models';
import { ServiceGroupApiResponse } from '../model/models';
import { ServiceGroupListApiResponse } from '../model/models';
import { ServiceItem } from '../model/models';
import { ServiceItemApiResponse } from '../model/models';
import { ServiceItemListApiResponse } from '../model/models';
import { ServiceProvider } from '../model/models';
import { ServiceProviderApiResponse } from '../model/models';
import { ServiceProviderListApiResponse } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface AppServiceSettingGroupRequestParams {
    id: number;
    appKey: string;
}

export interface AppServiceSettingGroupDeleteRequestParams {
    id: number;
    appKey: string;
}

export interface AppServiceSettingGroupPostRequestParams {
    appKey: string;
    serviceGroup?: ServiceGroup;
}

export interface AppServiceSettingGroupPutRequestParams {
    id: number;
    appKey: string;
    serviceGroup?: ServiceGroup;
}

export interface AppServiceSettingGroupsRequestParams {
    appKey: string;
    providerId?: number;
    showFlag?: boolean;
}

export interface AppServiceSettingItemRequestParams {
    id: number;
    appKey: string;
}

export interface AppServiceSettingItemDeleteRequestParams {
    id: number;
    appKey: string;
}

export interface AppServiceSettingItemPostRequestParams {
    appKey: string;
    serviceItem?: ServiceItem;
}

export interface AppServiceSettingItemPutRequestParams {
    id: number;
    appKey: string;
    serviceItem?: ServiceItem;
}

export interface AppServiceSettingItemsRequestParams {
    appKey: string;
    bizCode?: string;
    providerCode?: string;
    groupCode?: string;
    showFlag?: boolean;
}

export interface AppServiceSettingProviderRequestParams {
    id: number;
    appKey: string;
}

export interface AppServiceSettingProviderDeleteRequestParams {
    id: number;
    appKey: string;
}

export interface AppServiceSettingProviderPostRequestParams {
    appKey: string;
    serviceProvider?: ServiceProvider;
}

export interface AppServiceSettingProviderPutRequestParams {
    id: number;
    appKey: string;
    serviceProvider?: ServiceProvider;
}

export interface AppServiceSettingProvidersRequestParams {
    appKey: string;
    bizCode?: string;
    showFlag?: boolean;
}

export interface AppSettingRequestParams {
    id: number;
    appKey: string;
}

export interface AppSettingDeleteRequestParams {
    id: number;
    appKey: string;
}

export interface AppSettingPostRequestParams {
    appKey: string;
    appSetting?: AppSetting;
}

export interface AppSettingPutRequestParams {
    id: number;
    appKey: string;
    appSetting?: AppSetting;
}

export interface AppSettingsRequestParams {
    appKey: string;
    providerCode?: string;
    groupCode?: string;
    tag?: string;
    code?: string;
}


export interface AppSettingServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 获取服务分组详情
     * 根据服务分组ID获取服务分组详情
* @param requestParameters
     */
    appServiceSettingGroup(requestParameters: AppServiceSettingGroupRequestParams, extraHttpRequestParams?: any): Observable<ServiceGroupApiResponse>;

    /**
     * 删除服务分组
     * 根据服务分组ID删除服务分组
* @param requestParameters
     */
    appServiceSettingGroupDelete(requestParameters: AppServiceSettingGroupDeleteRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 添加服务分组
     * 添加新的服务分组信息
* @param requestParameters
     */
    appServiceSettingGroupPost(requestParameters: AppServiceSettingGroupPostRequestParams, extraHttpRequestParams?: any): Observable<AppSettingGroupPostResultApiResponse>;

    /**
     * 更新服务分组
     * 根据服务分组ID更新服务分组信息
* @param requestParameters
     */
    appServiceSettingGroupPut(requestParameters: AppServiceSettingGroupPutRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 获取服务分组列表
     * 根据服务商ID和显示标志获取服务分组列表
* @param requestParameters
     */
    appServiceSettingGroups(requestParameters: AppServiceSettingGroupsRequestParams, extraHttpRequestParams?: any): Observable<ServiceGroupListApiResponse>;

    /**
     * 服务配置项详情
     * 根据服务配置项ID获取服务配置项详情
* @param requestParameters
     */
    appServiceSettingItem(requestParameters: AppServiceSettingItemRequestParams, extraHttpRequestParams?: any): Observable<ServiceItemApiResponse>;

    /**
     * 删除服务配置项
     * 根据服务配置项ID删除服务配置项
* @param requestParameters
     */
    appServiceSettingItemDelete(requestParameters: AppServiceSettingItemDeleteRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 添加服务配置项
     * 添加新的服务配置项信息
* @param requestParameters
     */
    appServiceSettingItemPost(requestParameters: AppServiceSettingItemPostRequestParams, extraHttpRequestParams?: any): Observable<AppSettingItemPostResultApiResponse>;

    /**
     * 更新服务配置项
     * 根据服务配置项ID更新服务配置项信息
* @param requestParameters
     */
    appServiceSettingItemPut(requestParameters: AppServiceSettingItemPutRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 服务配置项列表
     * 根据业务代码、服务商代码、分组代码和显示标志获取服务配置项列表
* @param requestParameters
     */
    appServiceSettingItems(requestParameters: AppServiceSettingItemsRequestParams, extraHttpRequestParams?: any): Observable<ServiceItemListApiResponse>;

    /**
     * 获取服务商详情
     * 根据服务商ID获取服务商详情
* @param requestParameters
     */
    appServiceSettingProvider(requestParameters: AppServiceSettingProviderRequestParams, extraHttpRequestParams?: any): Observable<ServiceProviderApiResponse>;

    /**
     * 删除服务商
     * 根据服务商ID删除服务商
* @param requestParameters
     */
    appServiceSettingProviderDelete(requestParameters: AppServiceSettingProviderDeleteRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 添加服务商
     * 添加新的服务商信息
* @param requestParameters
     */
    appServiceSettingProviderPost(requestParameters: AppServiceSettingProviderPostRequestParams, extraHttpRequestParams?: any): Observable<AppSettingProviderPostResultApiResponse>;

    /**
     * 更新服务商
     * 根据服务商ID更新服务商信息
* @param requestParameters
     */
    appServiceSettingProviderPut(requestParameters: AppServiceSettingProviderPutRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 获取服务商列表
     * 根据业务代码和显示标志获取服务商列表
* @param requestParameters
     */
    appServiceSettingProviders(requestParameters: AppServiceSettingProvidersRequestParams, extraHttpRequestParams?: any): Observable<ServiceProviderListApiResponse>;

    /**
     * 配置详情
     * 根据配置ID获取配置详情
* @param requestParameters
     */
    appSetting(requestParameters: AppSettingRequestParams, extraHttpRequestParams?: any): Observable<AppSettingApiResponse>;

    /**
     * 删除配置
     * 根据配置ID删除配置
* @param requestParameters
     */
    appSettingDelete(requestParameters: AppSettingDeleteRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 增加配置
     * 添加新的配置内容
* @param requestParameters
     */
    appSettingPost(requestParameters: AppSettingPostRequestParams, extraHttpRequestParams?: any): Observable<AppSettingSettingPostResultApiResponse>;

    /**
     * 更新配置
     * 根据配置ID更新配置内容
* @param requestParameters
     */
    appSettingPut(requestParameters: AppSettingPutRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 配置列表
     * 根据服务商代码、分组代码、标签和配置项代码获取配置列表
* @param requestParameters
     */
    appSettings(requestParameters: AppSettingsRequestParams, extraHttpRequestParams?: any): Observable<AppSettingListApiResponse>;

}

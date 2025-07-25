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

import { BooleanApiResponse } from '../model/models';
import { ListResponseItemListApiResponse } from '../model/models';
import { Team } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface TeamDeleteRequestParams {
    id: number;
}

export interface TeamPostRequestParams {
    team?: Team;
}

export interface TeamPutRequestParams {
    id: number;
    team?: Team;
}

export interface TeamsRequestParams {
    channelCode?: string;
    channelAppId?: string;
}


export interface TeamServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 删除团队
     * 根据团队ID删除团队
* @param requestParameters
     */
    teamDelete(requestParameters: TeamDeleteRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 创建团队
     * 创建一个新的团队
* @param requestParameters
     */
    teamPost(requestParameters: TeamPostRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 更新团队信息
     * 根据团队ID更新团队信息
* @param requestParameters
     */
    teamPut(requestParameters: TeamPutRequestParams, extraHttpRequestParams?: any): Observable<BooleanApiResponse>;

    /**
     * 获取团队列表
     * 根据渠道代码和渠道应用ID获取团队列表
* @param requestParameters
     */
    teams(requestParameters: TeamsRequestParams, extraHttpRequestParams?: any): Observable<ListResponseItemListApiResponse>;

}

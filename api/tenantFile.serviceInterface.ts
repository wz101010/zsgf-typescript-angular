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

import { JObjectApiResult } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface TenantFileCreateFolderRequestParams {
    path?: string;
}

export interface TenantFileDeleteRequestParams {
    path?: string;
}

export interface TenantFileRenameRequestParams {
    sourceName?: string;
    destName?: string;
}

export interface TenantFileUploadRequestParams {
    path?: string;
    file?: Blob;
}

export interface TenantFilesRequestParams {
    path?: string;
}


export interface TenantFileServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 创建文件夹
     * 
* @param requestParameters
     */
    tenantFileCreateFolder(requestParameters: TenantFileCreateFolderRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 删除文件
     * 
* @param requestParameters
     */
    tenantFileDelete(requestParameters: TenantFileDeleteRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 重命名文件
     * 
* @param requestParameters
     */
    tenantFileRename(requestParameters: TenantFileRenameRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 上传文件
     * 
* @param requestParameters
     */
    tenantFileUpload(requestParameters: TenantFileUploadRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

    /**
     * 文件列表
     * 
* @param requestParameters
     */
    tenantFiles(requestParameters: TenantFilesRequestParams, extraHttpRequestParams?: any): Observable<JObjectApiResult>;

}

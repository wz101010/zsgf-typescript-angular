/**
 * 全部  API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ListResponseItem } from './listResponseItem';


export interface ListResponseItemListApiResponse { 
    /**
     * 状态码
     */
    code?: number;
    /**
     * 响应数据
     */
    data?: Array<ListResponseItem> | null;
    /**
     * 错误信息
     */
    error?: string | null;
}



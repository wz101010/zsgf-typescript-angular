/**
 * 全部 API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Order } from './order';


export interface OrderApiResponse { 
    /**
     * 状态码
     */
    code?: number;
    data?: Order;
    /**
     * 错误信息
     */
    error?: string | null;
}



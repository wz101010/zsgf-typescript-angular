/**
 * 全部 API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface RechargePointRequest { 
    /**
     * 虚拟币代码
     */
    currency: string;
    /**
     * 充值额
     */
    balance: number;
    /**
     * 备注
     */
    remark?: string | null;
    /**
     * 描述
     */
    description?: string | null;
    /**
     * 标签
     */
    tags?: string | null;
}



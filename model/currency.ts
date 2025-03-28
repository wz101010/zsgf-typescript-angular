/**
 * 全部  API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Currency { 
    id?: number;
    name?: string | null;
    code?: string | null;
    symbol?: string | null;
    issuer?: string | null;
    currencyType?: string | null;
    tags?: string | null;
    status?: boolean;
    enableVirtualRecharge?: boolean;
    enableVirtualConsume?: boolean;
    description?: string | null;
    fiatExchangeRate?: number;
    fiatDailyRechargeLimit?: number;
    totalSupply?: number;
    createDate?: string;
    lastUpdate?: string;
}



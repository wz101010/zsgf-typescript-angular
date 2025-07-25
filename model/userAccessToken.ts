/**
 * 全部 API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 用户令牌实体，用于管理用户的访问令牌及其相关信息。
 */
export interface UserAccessToken { 
    /**
     * 用户令牌的唯一标识符。
     */
    id?: number;
    /**
     * 与令牌关联的用户ID。
     */
    userID?: number;
    /**
     * 指示令牌是否处于启用状态。
     */
    enable?: boolean;
    /**
     * 令牌拥有的权限列表，多个权限以逗号分隔。
     */
    permissions?: string | null;
    /**
     * 令牌的标题或名称，用于标识令牌。
     */
    title?: string | null;
    /**
     * 访问令牌的具体值，用于身份验证。
     */
    accessToken?: string | null;
    /**
     * 用于分类或标记令牌的标签。
     */
    tags?: string | null;
    /**
     * 令牌的详细描述信息。
     */
    description?: string | null;
    /**
     * 令牌的过期时间，超过该时间令牌将失效。
     */
    expireTime?: string;
    /**
     * 令牌的创建日期，默认为当前时间。
     */
    createDate?: string;
    /**
     * 令牌的最后更新日期，默认为当前时间。
     */
    lastUpdate?: string;
}



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
 * 团队
 */
export interface Team { 
    /**
     * ID
     */
    id?: number;
    /**
     * 用户ID
     */
    userID?: number;
    /**
     * 渠道代码
     */
    channelCode?: string | null;
    /**
     * 渠道应用ID
     */
    channelAppID?: string | null;
    /**
     * 角色
     */
    role?: string | null;
    /**
     * 权限
     */
    permission?: string | null;
    /**
     * 是否显示
     */
    show?: boolean;
    /**
     * 显示顺序
     */
    showIndex?: number;
    /**
     * 创建日期
     */
    createDate?: string;
    /**
     * 最后更新日期
     */
    lastUpdate?: string;
}



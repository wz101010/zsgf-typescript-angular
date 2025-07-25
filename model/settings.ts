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
 * 公共配置存储实体，用于集中管理系统的配置项。
 */
export interface Settings { 
    /**
     * 配置项的唯一标识符。
     */
    id?: number;
    /**
     * 配置项所属的业务代码，用于分类管理。
     */
    bizCode?: string | null;
    /**
     * 配置项所属的业务标识，用于唯一标识业务。
     */
    bizIdentity?: string | null;
    /**
     * 配置项的提供者代码，用于标识配置来源。
     */
    providerCode?: string | null;
    /**
     * 配置项的分组代码，用于组织和管理相关配置。
     */
    groupCode?: string | null;
    /**
     * 配置项的唯一代码，用于标识具体的配置项。
     */
    code?: string | null;
    /**
     * 配置项的具体值，存储配置内容。
     */
    value?: string | null;
    /**
     * 用于分类或标记配置项的标签。
     */
    tags?: string | null;
    /**
     * 配置项的详细描述，说明其用途和作用。
     */
    description?: string | null;
    /**
     * 指示该配置项是否可供前端使用。
     */
    frontendUsable?: boolean;
    /**
     * 配置项的创建日期，默认为当前时间。
     */
    createDate?: string;
    /**
     * 配置项的最后更新日期，默认为当前时间。
     */
    lastUpdate?: string;
}



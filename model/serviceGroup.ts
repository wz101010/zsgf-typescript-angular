/**
 * 全部  API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 服务功能分组实体，用于对服务功能进行分类和管理。
 */
export interface ServiceGroup { 
    /**
     * 服务功能分组的唯一标识符。
     */
    id?: number;
    /**
     * 关联的服务商的唯一标识符。
     */
    providerID?: number;
    /**
     * 服务功能分组的名称。
     */
    name?: string | null;
    /**
     * 服务功能分组的唯一代码，用于系统内部标识。
     */
    code?: string | null;
    /**
     * 服务功能分组的图标URL或路径。
     */
    icon?: string | null;
    /**
     * 服务功能分组的详细描述信息。
     */
    description?: string | null;
    /**
     * 指示服务功能分组是否在界面上显示。
     */
    show?: boolean;
    /**
     * 服务功能分组在界面上的显示顺序。
     */
    showIndex?: number;
    /**
     * 服务功能分组的创建日期，默认为当前时间。
     */
    createDate?: string;
    /**
     * 服务功能分组的最后更新日期，默认为当前时间。
     */
    lastUpdate?: string;
}



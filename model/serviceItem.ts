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
 * 服务配置项实体，用于定义和管理服务相关的配置信息。
 */
export interface ServiceItem { 
    /**
     * 服务配置项的唯一标识符。
     */
    id?: number;
    /**
     * 服务配置项所属的业务代码，用于分类管理。
     */
    bizCode?: string | null;
    /**
     * 关联的服务商代码，用于标识提供该配置项的服务商。
     */
    providerCode?: string | null;
    /**
     * 服务配置项所属的功能分组代码，用于组织和管理相关配置项。
     */
    groupCode?: string | null;
    /**
     * 服务配置项的名称，用于描述其功能或用途。
     */
    name?: string | null;
    /**
     * 服务配置项的唯一代码，用于系统内部标识。
     */
    code?: string | null;
    /**
     * 服务配置项的值类型，例如 \'text\', \'number\', \'boolean\' 等。默认为 \'text\'。
     */
    valueType?: string | null;
    /**
     * 服务配置项的图标URL或路径，用于在界面上显示。
     */
    icon?: string | null;
    /**
     * 服务配置项的默认值，当未设置具体值时使用。
     */
    valueDefaults?: string | null;
    /**
     * 服务配置项的详细描述信息，用于说明其用途和配置方法。
     */
    description?: string | null;
    /**
     * 用于分类或标记服务配置项的标签。
     */
    tags?: string | null;
    /**
     * 指示该配置项是否为系统级别的配置项，默认为 false。
     */
    isSystem?: boolean;
    /**
     * 指示服务配置项是否在界面上显示，默认为 true。
     */
    show?: boolean;
    /**
     * 服务配置项在界面上的显示顺序。
     */
    showIndex?: number;
    /**
     * 服务配置项的创建日期，默认为当前时间。
     */
    createDate?: string;
    /**
     * 服务配置项的最后更新日期，默认为当前时间。
     */
    lastUpdate?: string;
}



/**
 * 全部  API 文档
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface PhoneSignUpRequest { 
    phone: string;
    /**
     * 手机验证码
     */
    phoneCode: string;
    pwd: string;
    /**
     * 邮箱
     */
    email?: string | null;
    /**
     * 邮箱验证码（只有启用的邮箱验证码功能时，才需要传入）
     */
    emailCode?: string | null;
    /**
     * 昵称
     */
    nickName?: string | null;
    /**
     * 头像
     */
    avatar?: string | null;
    /**
     * 自定义数据
     */
    data?: string | null;
}



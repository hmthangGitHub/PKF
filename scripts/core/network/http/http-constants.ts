export const ContentType = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*'
};

export enum HttpMethod {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Patch = 'patch',
    Head = 'head',
    Delete = 'delete'
}

export enum HttpEcdType {
    /** 不加密 */
    NULL = 'NULL',
    /** 旧加密(coin5) */
    COIN5 = 'COIN5',
    /** 新加密（v3） */
    V3 = 'V3',
    /** 只用于测试 */
    Test = 'Test'
}

export const MaxTimeout = 2147483647;

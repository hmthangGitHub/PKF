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

export const MaxTimeout = 2147483647;

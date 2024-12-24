export interface DataServerParameters {
    trackingKey: string;
    dataServerUrl: string;
}

export interface IWCReportParams {
    name?: string;
    data?: WCParamsData;
}

export interface WCParamsData {
    $user_id?: string | number;
    $device_id?: string | number;
    type?: string | number;
    game_id?: string | number;
    lobby_id?: string | number;
    table_position?: string | number;
    kyc_started?: string;
}

export interface IMertricsApi {
    getTrackingKey?: (dataServerUrl: string) => Promise<string>;

    reportPageView?: (dataServerParams: DataServerParameters, page: string) => Promise<void>;

    reportWC?: (dataServerParams: DataServerParameters, name: string, paramsData: WCParamsData) => Promise<void>;
}

import { pb } from 'ws_protocol';
import type { IResponseClubCurrentBoard } from '../poker-socket';
import { PKWSocket } from './pkw-socket';

export class PKWSocketV2 extends PKWSocket {
    async getClubCurrentBoard(): Promise<IResponseClubCurrentBoard> {
        const requestProto = new pb.RequestClubCurrentBoard();

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_ClubCurrentBoardV2_Request,
            pb.RequestClubCurrentBoard,
            pb.MSGID.MsgID_ClubCurrentBoardV2_Response,
            pb.ResponseClubCurrentBoard
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getClubCurrentBoard');

        return responseProto;
    }

    protected registerNotificationHandlers(): void {
        this.registerNotificationHandler(
            pb.MSGID.MsgID_ClubCurrentBoardV2_Notice,
            pb.NoticeClubCurrentBoardV2,
            this.handleClubCurrentBoardNotify.bind(this)
        );
    }

    protected handleClubCurrentBoardNotify(protobuf: pb.INoticeClubCurrentBoardV2) {
        this._notification.emit('clubCurrentBoard', protobuf);
    }
}

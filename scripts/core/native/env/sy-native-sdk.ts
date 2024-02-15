import {NativeInvokeAction, NativeSDK} from "../native-sdk";
import {ModuleManager} from "../../../core/module/module-index";
import {App} from "../../app/app";

export class SYNativeSDK extends NativeSDK {
    nativeName = "SYNativeSDK"


    // TODO:
    //NOTE: 私语Web版本的接口
    //js层调用js层接口
    /*
        1001 获取设备ID   "{cmd: \'1001\'}"
        1002 获取GPS信息  "{cmd: \'1002\'}"
        1003 震动         "{cmd: \'1003\'}"
        1004 安卓模拟器检查  "{cmd: \'1004\'}"
        1005 开启横屏  "{cmd: \'1005\'}"
        1006 弹出webview对话框  "{cmd: \'1006\'}"  String url:webview对话框要渲染的地址   int width; //webview对话框宽度   int height; //webview对话框高度
              op: 0   关闭子webview   op：1 打开子webview
        1007 录音操作   "{cmd: \'1007\'}"  op=0，开始录音，1:结束录音，2:取消录音
        1008 保存图片到相册   "{cmd: \'1007\', "url": strUrl}"   strUr：需要下载的图片url
        1010 获取电量信息  "{cmd: \'1010\'}"
        1011 获取系统语言   "{cmd: \'1011\'}"
        1012 打开系统浏览器 "{cmd: \'1012\'}"   url： 打开链接
        1013 操作剪切板   "{cmd: \'1013\'}"   op:0  获取系统剪切板  op:1 设置系统剪切板  content: 剪切板内容
        1014 是否是ipad设备  "{cmd: \'1014\'}"
    */
    // TODO:
    invoke(jsonCmd: NativeInvokeAction): string {
        return "";
    }
    // invoke(jsonCmd: string): string {
    //     console.log("SYwebjsToClient cmd:" + jsonCmd);
    //     if (this._system.isBrowser && this._system.isAndroidOrIOS) {
    //         safetalk.jsToClient(jsonCmd);
    //     } else {
    //         console.error("SYwebjsToClient isn't on browser");
    //     }
    //     return "";
    // }

    // TODO:
    // NOTE: 私语调用返回函数
    // res => {
    //     cmd: any;
    //     op: any;
    // }
    // NOTICE: 不知何時會使用 (H5 Webview in 私語APP ??)
    //NOTE: 私语调用返回函数
    // docs: 游戏层定义了全局的clientToJs方法，用于私语的消息回调。回调结果同样是一个json字符串。
    static callback(res: any) {
        if (res == null) {
            console.log("SYwebClientToJs return data is null.");
            return;
        }
        console.log("SYwebClientToJs callBack:" + res);

        res = res.replace(/\n/g, '');
        res = res.replace(/\r/g, '');

        let data = JSON.parse(res);
        let cmd = data["cmd"];
        let op = data["op"];

        switch (cmd) {
            case "1007":  //录音回调返回
            {
                if (op == 0) {  //开始录音返回
                    // cv.MessageCenter.send("SYStartRecord", data);
                } else if (op == 1) {  //停止录音返回
                    // cv.MessageCenter.send("SYStopRecord", data);
                } else if (op == 2) {  //取消录音返回
                    // cv.MessageCenter.send("SYCancelRecord", data);
                }
            }
                break;
                                          
            case "1009":  //切换前后台通知  
            {                
                const app: App | undefined = ModuleManager.instance.get(App);
                if(!app) return;
                
                if (op == 0) {  
                    //切換至后台
                    app.notification.emit("appEnterBackground");
                    // cv.MessageCenter.send("on_syOnEnterBackground");
                    // TODO:
                    // cv.netWorkManager.OnAppEnterBackground();

                } else if (op == 1) {  
                    //切換至前台
                    app.notification.emit("appEnterForeground");                    
                    // TODO:
                    // cv.netWorkManager.OnAppEnterForeground();
            }}
                break;  

            case "1015":  //ccjs监听返回，当前为ios平台才有
                let url = data["url"];
                if (url != null) {
                    // cv.MessageCenter.send("on_syCcjsCallback", url);
                }
                break;
        }
    }
}

// window.clientToJs = SYNativeSDK.callback;
export class AppConfig {
    //测试环境URL
    public static getDevUrl() {
        return "http://localhost:8100/mic";
    }
    //生产环境URL
    public static getProdUrl() {
        return "http://localhost:8100/mic";
    }
    //获取设备高度
    public static getWindowHeight() {
        return window.screen.height;
    }
    //获取设备宽度
    public static getWindowWidth() {
        return window.screen.width;
    }
}
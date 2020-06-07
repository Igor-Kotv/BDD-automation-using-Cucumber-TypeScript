class searchIp {

    public get searchField()  { return browser.element("/html/body/app-root/div/div[1]/app-rz-header/header/div/div[2]/div[2]/form/div/div/input") }
    public get findButton()  { return browser.element("/html/body/app-root/div/div[1]/app-rz-header/header/div/div[2]/div[2]/form/button") }
    public get iTem()  { return browser.element("/html/body/app-root/div/div[1]/rz-category/div/main/ctg-catalog/div/div[2]/section/div/ctg-grid/ul/li[1]/app-goods-tile-default/div/div[2]/a[2]")}
    public get binAdd()  { return browser.element("/html/body/app-root/div/div[1]/app-rz-product/div/product-tab-main/div[1]/div[1]/div[2]/product-main-info/div/div/app-product-buy-btn/app-buy-button/button")}
    public get binCheck() { return browser.element("/html/body/app-root/div/div[1]/div/cart-modal/modal-window/div/div/div/cart-content/div[1]")}
    public open(): void {
        browser.url('/')
    }
}
const TheSearch = new searchIp();
export default TheSearch

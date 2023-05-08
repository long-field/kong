import loginPage from '../pageobjects/login.page'
import registerPage from '../pageobjects/register.page'
import hentaiPage from '../pageobjects/hentai.page';
import cocoPage from '../pageobjects/coco.page';
describe('My Login application', () => {

    loginPage.navigateToLoginPage();
    it('should login', async () => {
    
        await loginPage.login();
        await browser.maximizeWindow();
        browser.pause(1000);
    })

    it('should register', async () => {
    
        await registerPage.register();
    })
    it('should poke hentai', async () => {
    
        await hentaiPage.pokeHentai();
        await hentaiPage.pokeHentai();
        await hentaiPage.pokeHentai();
       
        await hentaiPage.pokebtn();
    })

    it('should kil coconuts', async () => {
    
        await cocoPage.killCOCONUTS();
        await cocoPage.fuckOFF();
        await browser.pause(5000)

})

})

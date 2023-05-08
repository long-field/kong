import Page from './page';
class RegisterPage extends Page {
 

    async register(){

        await browser.keys(['Tab']);
        await browser.keys("test");
        await browser.keys(['Tab']);
        await browser.keys("test");
        await browser.keys(['Tab']);
        await browser.keys("0496374735");
        await browser.keys(['Tab']);
        await browser.keys("1");
        await browser.keys(['Tab']);
        await browser.keys("kak@kak.net");
        await this.btn.click();
  
       
}

    get btn(){
        return $('[data-cy="login"]');
    }



    
}

export default new RegisterPage();

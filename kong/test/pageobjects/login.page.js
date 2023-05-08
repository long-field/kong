import Page from './page';

class LoginPage extends Page {
  
    open () {
        return super.open('loginPage');z
    }
    async navigateToLoginPage () {
        it('shoud navigate to base url', async ()=>{
           await browser.url('http://ui-training-application.s3-website-eu-west-1.amazonaws.com');
        })
    }   
    async login(){
        await  this.nameInput.setValue('admin');
        await this.passInput.setValue('admin');
        await this.btn.click();
    }

    get btn(){
        return $('[data-cy="login"]');
    }

    get nameInput() {
        return $('[data-cy="user-name"]');
    }

    get passInput(){
        return $('[data-cy="password"]');
    }
}
export default new LoginPage();
import Page from './page';
class CocoPage extends Page {
 

   async fuckOFF(){
    this.btn.click();
   }

    async killCOCONUTS() {
        
        const coco = await $$('[class="snow ng-star-inserted"]');
      for (let i = 0; i < 16; i++) {
         try {
             await coco[i].click();
            } catch (err) {
  
            }
        }
        browser.pause(5000);
        
    }

    get btn(){
        return $('[data-cy="login"]');
    }
    
}

export default new CocoPage();

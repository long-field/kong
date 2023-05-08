import Page from './page';

class HentaiPage extends Page {
  
    open () {
        return super.open('hentaipage');
    }
  
  

    async pokeHentai() {
        
        const hentais = await $$('[id*="button-close"]');
      for (let i = 0; i < hentais.length; i++) {
         try {
             await hentais[i].click();
            } catch (err) {
  
            }
        }
        
    }

    async pokebtn(){
        this.btn.click();

    }
    get btn(){
        return $('[data-cy="login"]');
    }
    
}
export default new HentaiPage();
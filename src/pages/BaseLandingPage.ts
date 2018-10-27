import { MenuController } from 'ionic-angular';

export class BaseLandingPage {
    constructor(public menuCtrl: MenuController) {
        // disable menu
        this.menuCtrl.enable(false, 'main');
    }
}

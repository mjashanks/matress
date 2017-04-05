import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Matress';
    config.map([
      { route: '', moduleId: 'account-overview', title: 'Account Overview'}
    ]);

    this.router = router;
  }  
}

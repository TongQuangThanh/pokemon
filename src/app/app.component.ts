import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal, Platform } from '@ionic/angular';
import { AdMob, AdMobBannerSize, BannerAdOptions, BannerAdPluginEvents, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';
import { SharedService } from './services/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { LOCAL_LANG, adBannerAndroid } from '../environments/const';
import { PluginListenerHandle } from '@capacitor/core/types/definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Game (coming soon)',
      url: '/app/tabs/game',
      icon: 'game-controller',
      disable: true
    },
    {
      title: 'Wiki',
      url: '/app/tabs/wiki',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;
  dark = false;
  lang = localStorage.getItem(LOCAL_LANG) || this.sharedService.lang;
  @ViewChild(IonModal) modal: IonModal;
  listenerHandlers: PluginListenerHandle[] = [];

  constructor(private platform: Platform, private translate: TranslateService, private sharedService: SharedService) {
    this.translate.use(this.lang);
    this.initializeAdMob();
  }

  async ngOnInit() {
    this.listenForLoginEvents();
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }
  
  async initializeAdMob() {
    this.platform.ready().then(async () => {
      await AdMob.trackingAuthorizationStatus();
      await AdMob.initialize({
        // TODO
        // initializeForTesting: true,
        requestTrackingAuthorization: true
      });
      const resizeHandler = AdMob.addListener(BannerAdPluginEvents.SizeChanged, (info: AdMobBannerSize) => {
        const menu: HTMLElement = document.querySelector('ion-menu');
        const app: HTMLElement = document.querySelector('ion-router-outlet');
        if (info.height === 0) {
          app.style.marginTop = '';
          menu.style.marginTop = '';
          return;
        }
        if (info.height > 0) {
          const body = document.querySelector('body');
          const bodyStyles = window.getComputedStyle(body);
          const safeAreaTop = bodyStyles.getPropertyValue('--ion-safe-area-top');
          app.style.marginTop = `calc(${safeAreaTop} + ${info.height}px)`;
          menu.style.marginTop = `calc(${safeAreaTop} + ${info.height}px)`;
        }
      });
      this.listenerHandlers.push(resizeHandler);
      const adId = adBannerAndroid; // 'ca-app-pub-3940256099942544/2934735716';
      const options: BannerAdOptions = {
        adId,
        // TODO
        // isTesting: true,
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.TOP_CENTER,
        margin: 0
      };
      await AdMob.showBanner(options);
    });
  }

  changeLang(e: any) {
    this.lang = e.detail.value;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.translate.use(this.lang);
      localStorage.setItem(LOCAL_LANG, this.lang);
      this.sharedService.lang = this.lang;
    }
  }

}

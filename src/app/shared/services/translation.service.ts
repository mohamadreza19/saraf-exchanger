import { Inject, Injectable } from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';

export const LANGUAGE_KEY = 'i18n-language';

@Injectable()
export class TranslationService {
  constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {}

  public getLanguage(): string {
    return localStorage.getItem(LANGUAGE_KEY) || 'en';
  }

  public setLanguage(newLang: string) {
    localStorage.setItem(LANGUAGE_KEY, newLang);

    this.i18NextService.changeLanguage(newLang).then((x) => {
      document.location.reload();
    });
  }
}

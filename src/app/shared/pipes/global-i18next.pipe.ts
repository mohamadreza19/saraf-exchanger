import { Pipe, PipeTransform } from '@angular/core';
import i18next from 'i18next';

@Pipe({
  name: 'i18next', // The pipe name
  pure: true, // Makes the pipe pure for performance
  standalone: true, // Enables usage in standalone components
})
export class GlobalI18NextPipe implements PipeTransform {
  transform(key: string, options?: any): string {
    return i18next.t(key, options) as string; // Use i18next's translation function
  }
}

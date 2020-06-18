import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'inMiliseconds' })
export class InMilisecondsPipe implements PipeTransform {
  transform(unixtime: number): number {
    return unixtime * 1000;
  }
}

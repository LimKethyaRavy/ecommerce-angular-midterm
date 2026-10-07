import { JsonPipe } from '@angular/common';
import { Component, Input, signal } from '@angular/core';


interface TimeLeftDis {
  day: string,
  hours: string,
  minutes: string,
  seconds: string
}
@Component({
  selector: 'app-lastest-products',
  imports: [],
  templateUrl: './lastest-products.html',
  styleUrl: './lastest-products.css',
})
export class LastestProducts {

  @Input() lastestDeal : any;
  @Input() featureDeal: any;

    currentSlide = 0;

  goTo(index: number) {
    this.currentSlide = index;
  }

  @Input() targetDate: Date | string | number = new Date(Date.now() + 86400000 * 3); 

  timeLeft = signal<TimeLeftDis>({ day: '00', hours: '00', minutes: '00', seconds: '00' });
  private timerId: any;

  ngOnInit(): void {
    this.updateCountdown();
    this.timerId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private updateCountdown(): void {
    const target = new Date(this.targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      this.timeLeft.set({ day: '00', hours: '00', minutes: '00', seconds: '00' });
      clearInterval(this.timerId);
      return;
    }

   

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    this.timeLeft.set({
      day: this.padZero(days),
      hours: this.padZero(hours),
      minutes: this.padZero(minutes),
      seconds: this.padZero(seconds)
    });
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeadlineService } from './deadline.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  secondsLeft: number = 0;

  constructor(private deadlineService: DeadlineService) {}

  ngOnInit(): void {
    this.fetchDeadline();
    this.startCountdown();
  }

  private fetchDeadline(): void {
    this.deadlineService.getDeadline().subscribe((seconds) => {
      this.secondsLeft = seconds;
    });
  }

  private startCountdown(): void {
    setInterval(() => {
      if (this.secondsLeft > 0) {
        this.secondsLeft--;
      }
    }, 1000);
  }
}

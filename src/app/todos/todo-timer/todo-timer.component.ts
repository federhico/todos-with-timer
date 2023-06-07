import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-timer',
  templateUrl: './todo-timer.component.html',
  styleUrls: ['./todo-timer.component.scss']
})
export class TodoTimerComponent implements OnInit {

  loaderSvgPath: string | undefined;

  private animationSubject = new Subject<void>();
  private remainingTimeSubject = new Subject<void>();
  private destroy$ = new Subject<void>();

  duration = 10000; //set on 10 seconds for testing propouses, should be 30 minutes
  framesPerAnimation = 360;
  animationIncrement = 1;
  animationIntervalTime = Math.floor(this.duration / (this.framesPerAnimation * this.animationIncrement));

  angle = 0;
  cycleCount = 0;
  inProgress = false;
  remainingTime = 0;

  @Input() item!: Todo;
  @Output() onFinish = new EventEmitter<number>();

  constructor(private todoService:TodoService){

  }

  ngOnInit(): void {
    if(this.item.inProgress) {
      this.start();
    }
  }


  start(): void {
    this.remainingTime = this.duration;
    this.drawInitial();
    this.updateRemainingTime();

    this.angle = 0;
    this.cycleCount = 0;

    interval(this.animationIntervalTime)
      .pipe(takeUntil(this.animationSubject), takeUntil(this.destroy$))
      .subscribe(() => this.animate());

    interval(1000)
      .pipe(takeUntil(this.remainingTimeSubject), takeUntil(this.destroy$))
      .subscribe(() => this.updateRemainingTime());
  }

  stop(): void {
    this.remainingTime = this.duration;
    this.animationSubject.next();
    this.remainingTimeSubject.next();
  }

  toggleProgress(): void {
    this.inProgress = !this.inProgress;
    if (this.inProgress) {
      this.start();
    } else {
      this.stop();
    }
  }

  drawInitial(): void {
    const initialAnimationPath = 'M 0 0 v -20 A 20 20 1 1 1 0 -20 z';
    this.loaderSvgPath = initialAnimationPath;
  }

  animate(): void {
    this.angle++;
    this.angle %= 360;

    if (this.angle === 0) {
      this.cycleCount++;
      this.onFinish.emit(this.duration);
    }

    const radian = (this.angle * Math.PI / 180);
    const x = Math.sin(radian) * 20;
    const y = Math.cos(radian) * -20;
    const mid = (this.angle > 180) ? 1 : 0;

    const animationPath = `M 0 0 v -20 A 20 20 1 ${mid} 1 ${x} ${y} z`;

    this.inProgress = true;
    this.loaderSvgPath = animationPath;
  }

  updateRemainingTime(): void {
    if (this.remainingTime <= 0) {
      this.remainingTime = this.duration;
      return;
    }

    this.remainingTime -= 1000;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


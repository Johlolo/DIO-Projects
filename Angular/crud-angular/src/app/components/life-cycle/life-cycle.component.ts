import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() number = 10;

  constructor() { 
    console.log('chamou o constructor');
  }
  ngOnChanges(): void {
    console.log('chamou o ngOnChanges');
  }
  ngOnInit(): void {
    console.log('chamou o ngOnInit');
  }
  ngDoCheck(): void {
    console.log('chamou o ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('chamou o ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('chamou o ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('chamou o ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('chamou o ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('chamou o ngOnDestroy');
  }

}

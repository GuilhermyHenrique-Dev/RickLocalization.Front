import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // var robot = Snap('.drone');
  // var rg = robot.select('.right-gun');
  // var lg = robot.select('.left-gun');
  // var ra = robot.select('.right-arm');
  // var la = robot.select('.left-arm');

  // robot.click(function() {
  //   rg.toggleClass('turn-right-gun');
  //   lg.toggleClass('turn-left-gun');
  //   ra.toggleClass('push-right-arm');
  //   la.toggleClass('push-left-arm');
  //   robot.toggleClass('lift-off');
  // });

}

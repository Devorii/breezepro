import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.scss']
})
export class CreateProposalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() mToggle: string
}

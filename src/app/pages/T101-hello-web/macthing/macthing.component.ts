import { Component, OnInit } from '@angular/core';
import { Answer } from './answer';
import { MacthingService } from './macthing.service';

@Component({
  selector: 't101-macthing',
  templateUrl: './macthing.component.html',
  styleUrls: ['./macthing.component.scss']
})
export class MacthingComponent implements OnInit {

  constructor(private service: MacthingService) { }

  ngOnInit(): void {
  }

  public get keys() {
    return this.service.keys
  }

  public get values() {
    return this.service.values;
  }

  public get answers() {
    return this.service.answers;
  }

  private _selectedKey: string;
  public get selectedKey() {
    return this._selectedKey;
  }
  public set selectedKey(value: string) {
    console.log(value);
    this._selectedKey = value;
  }
  private _selectValue: string;
  public get selectedValue() {
    return this._selectValue;
  }
  public set selectedValue(value: string) {
    console.log(value);
    this._selectValue = value;
  }

  public get answerVisible() {
    return this.service.answers.length != 0;
  }

  /**
   * 刷新列表顺序
   */
  public refresh() {
    this.service.clearAnswers();
    this.selectedKey = undefined;
    this.selectedValue = undefined;
    this.service.fyShuffle();
  }

  /**
   * 添加答案
   */
  public addAnswer() {
    if ((this._selectValue === undefined) || (this._selectedKey === undefined)) {
      alert('');
    }
    this.service.addAnswer(this._selectedKey, this._selectValue);
  }

  /**
   * 删除答案
   * @param item
   */
  public deleteAnswer(item: Answer) {
    this.service.deleteAnswer(item);
  }
}

import { Injectable } from '@angular/core';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class MacthingService {

  /**
   * 连线题字典
   */
  private _dict: { [key: string]: string } = {
    ['萝卜']: '根',
    ['藕']: '茎',
    ['韭菜']: '叶',
    ['玫瑰']: '花',
    ['苹果']: '果实',
    ['核桃']: '种子',
  }

  private _keys: string[];
  public get keys() {
    return this._keys;
  }
  private _values: string[];
  public get values() {
    return this._values;
  }

  private _answers: Answer[] = [];
  public get answers() {
    return this._answers;
  }

  public addAnswer(entity: string, category) {
    const right = this._dict[entity];
    let remark: boolean = false;
    if (right === category) {
      remark = true;
    }
    const answer = new Answer();
    answer.entity = entity;
    answer.category = category;
    answer.remark = remark;
    this._answers.push(answer);
  }

  public deleteAnswer(item: Answer) {
    const index = this._answers.indexOf(item);
    this._answers.splice(index, 1);
  }

  public clearAnswers() {
    this._answers = [];
  }

  /**
   *
   */
  constructor() {
    this._keys = this.getKeys();
    this._values = this.getValues();
    this.fyShuffle();
  }

  public fyShuffle() {
    this._keys = this._fyShuffle(this._keys);
    this._values = this._fyShuffle(this._values);
  }

  private getKeys(): string[] {
    let target: string[] = [];
    for (let key in this._dict) {
      target.push(key);
    }
    return target;
  }

  private getValues(): string[] {
    let target: string[] = [];
    for (let key in this._dict) {
      target.push(this._dict[key]);
    }
    return target;
  }

  /**
   * Fisher–Yates shuffle 算法
   * @param arr
   */
  private _fyShuffle(arr) {
    let target = arr.concat();
    for (let i = target.length - 1; i > 0; i--) {
      let idx = Math.floor(i * Math.random());
      [target[i], target[idx]] = [target[idx], target[i]]
    }
    return target;
  }
}

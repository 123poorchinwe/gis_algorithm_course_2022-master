export interface Tool {
  /**
   * 在用户按下按键时触发。
   * @param event
   */
  onkeydown(event: KeyboardEvent)
  /**
   * 在用户敲击按钮时触发。
   * @param event
   */
  onkeypress(event: KeyboardEvent)
  /**
   * 当用户释放按键时触发。
   * @param event
   */
  onkeyup(event: KeyboardEvent)
  /**
   * 元素上发生鼠标点击时触发。
   * @param event
   */
  onclick(event: MouseEvent)
  /**
   * 元素上发生鼠标双击时触发。
   * @param event
   */
  ondblclick(event: MouseEvent)
  /**
   * 元素被拖动时运行的脚本。
   * @param event
   */
  ondrag(event: DragEvent)
  /**
   * 在拖动操作末端运行的脚本。
   * @param event
   */
  ondragend(event: DragEvent)
  /**
   * 当元素元素已被拖动到有效拖放区域时运行的脚本。
   * @param event
   */
  ondragenter(event: DragEvent)
  /**
   * 当元素离开有效拖放目标时运行的脚本。
   * @param event
   */
  ondragleave(event: DragEvent)
  /**
   * 当元素在有效拖放目标上正在被拖动时运行的脚本。
   * @param event
   */
  ondragover(event: DragEvent)
  /**
   * 在拖动操作开端运行的脚本。
   * @param event
   */
  ondragstart(event: DragEvent)
  /**
   * 当被拖元素正在被拖放时运行的脚本。
   * @param event
   */
  ondrop(event: DragEvent)
  /**
   * 当元素上按下鼠标按钮时触发。
   * @param event
   */
  onmousedown(event: MouseEvent)
  /**
   * 当鼠标指针移动到元素上时触发。
   * @param event
   */
  onmousemove(event: MouseEvent)
  /**
   * 当鼠标指针移出元素时触发。
   * @param event
   */
  onmouseout(event: MouseEvent)
  /**
   * 当鼠标指针移动到元素上时触发。
   * @param event
   */
  onmouseover(event: MouseEvent)
  /**
   * 当在元素上释放鼠标按钮时触发。
   * @param event
   */
  onmouseup(event: MouseEvent)
  /**
   * 当鼠标滚轮正在被滚动时运行的脚本。
   * @param event
   */
  onwheel(event: WheelEvent)
}

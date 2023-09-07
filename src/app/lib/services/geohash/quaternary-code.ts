import { bin } from 'd3-array'

/**
 * 四叉树四进制Morton编码
 */
export class QuaternaryCode {
  /**
   *
   * @param row
   * @param column
   * @param deep
   */
  public encoding(row, column, deep) {
    //TODO: 请同学们完成
    let code = 't'
    let tempy = this.calbinary(row, deep)
    let tempx = this.calbinary(column, deep)
    for (let i = 0; i < deep; i++) {
      let temp_morton = Number(tempy[i]) * 2 + Number(tempx[i])
      // let c = tempx[i].toNumber()
      if (temp_morton == 0) {
        code += 't'
      } else if (temp_morton == 1) {
        code += 's'
      } else if (temp_morton == 2) {
        code += 'q'
      } else if (temp_morton == 3) {
        code += 'r'
      }
    }

    return code
  }

  private calbinary(num, deep) {
    let re = []
    let str = parseInt(num.toString(2)).toString()
    if (str.length < deep) {
      str = '0' + str
    }
    for (let i = 0; i < str.length; i++) {
      re.push(str.charAt(i))
    }

    return re
  }

  // 判断两数是否相等
  private compare(m, n) {
    if (m == n) {
      return 1
    } else {
      return 0
    }
  }

  /**
   *
   * @param code
   */
  public decoding(code: string) {
    //TODO: 请同学们完成
    var row_b = ''
    var col_b = ''
    const deep = code.length
    for (let i = 0; i < code.length; i++) {
      if (code.charAt(i) == 't') {
        row_b += '0'
        col_b += '0'
      } else if (code.charAt(i) == 's') {
        row_b += '0'
        col_b += '1'
      } else if (code.charAt(i) == 'q') {
        row_b += '1'
        col_b += '0'
      } else {
        row_b += '1'
        col_b += '1'
      }
    }
    const row = parseInt(row_b, 2)
    const column = parseInt(col_b, 2)
    return { row, column, deep }
  }
}

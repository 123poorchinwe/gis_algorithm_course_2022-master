import { HttpClient, HttpHeaders } from '@angular/common/http';

export class AbstractService {

  /**
  *
  // tslint:disable-next-line: jsdoc-format
  * @param http HttpClient对象
  */
  constructor(protected http: HttpClient) { }

  // http 请求选项
  protected http_options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Guid生成函数
  protected newGuid() {
    let guid = '';
    for (let i = 1; i <= 32; i++) {
      const n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if ((i === 8) || (i === 12) || (i === 16) || (i === 20)) {
        guid += '-';
      }
    }
    return guid;
  }

  // 获取服务url地址
  protected getServiceUrl(url: string): string {
    return url;
  }

  /**
   *
   * @param url
   */
  protected createHttpGetRequest(url: string) {
    return this.http.get(
      this.getServiceUrl(url)
    );
  }

}

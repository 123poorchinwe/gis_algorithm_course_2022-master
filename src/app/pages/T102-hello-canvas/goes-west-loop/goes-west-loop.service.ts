import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AbstractService } from '../../../services/abstract-service';

@Injectable({
  providedIn: 'root'
})
export class GoesWestLoopService extends AbstractService {
  /**
   *
   */
  private url = environment.t102_hello_canvas.goes_west_loop.frameUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getFrames() {
    return this.createHttpGetRequest(this.url);
  }
}

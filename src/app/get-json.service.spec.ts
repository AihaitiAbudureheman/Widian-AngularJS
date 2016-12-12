/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetJsonService } from './get-json.service';

describe('GetJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJsonService]
    });
  });

  it('should ...', inject([GetJsonService], (service: GetJsonService) => {
    expect(service).toBeTruthy();
  }));
});

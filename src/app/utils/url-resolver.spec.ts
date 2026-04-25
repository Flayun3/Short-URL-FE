import { TestBed } from '@angular/core/testing';

import { UrlResolver } from './url-resolver';
/**
 * Todo test
 */
describe('UrlResolver', () => {
  let service: UrlResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

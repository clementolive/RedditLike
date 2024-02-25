import { pipe } from 'rxjs';
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe = new CapitalizePipe();
  beforeEach(() => {
    pipe = new CapitalizePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should capitalize the first letter of a string', () => {
    const res = pipe.transform("hello world", "signature");
    expect(res).toEqual('Hello world signature');
  });
});

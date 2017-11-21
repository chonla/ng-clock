import { TestBed, async } from '@angular/core/testing';
import { TimePipe } from './time.pipe';

describe('Time Pipe', () => {
  const pipe: any = null;

  beforeEach(async(() => {
    this.pipe = new TimePipe();
  }));

  it('should render time properly', async(() => {
    const t = new Date(2000, 10, 10, 20, 15, 24);
    const result = this.pipe.transform(t);

    expect(result).toEqual('8:15:24 PM');
  }));
});

import { TestBed, async } from '@angular/core/testing';
import { range } from './index';

describe('index', () => {
    it('range',async(() => {
        expect(range(0,4)).toEqual([0,1,2,3]);
    }));
});
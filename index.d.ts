import {Assertion} from '~chai/lib/Assertion';

declare module '~chai/lib/Assertion' {
    interface Assertion {
        containSubset(obj: Object): Assertion;
    }
}

function chaiSubset(chai: any, utils: any): void;
export = chaiSubset;

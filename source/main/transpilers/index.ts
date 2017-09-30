import { curryTranspile } from 'utils';

import typescript from './typescript';
import babel from './babel';

export default {
    typescript: curryTranspile(typescript),
    babel: curryTranspile(babel),
};
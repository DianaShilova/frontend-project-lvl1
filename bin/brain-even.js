#!/usr/bin/env node
import { isEven } from '../Games/even.js';
import game from '../src/index.js';

game('Answer "yes" if number is even, otherwise answer "no".', isEven);

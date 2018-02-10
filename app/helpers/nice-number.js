import { helper } from '@ember/component/helper';

export function niceNumber(params/*, hash*/) {
  const [input] = params;
  return input > 999 ? (input/1000).toFixed(1) + 'K' : input;
}

export default helper(niceNumber);

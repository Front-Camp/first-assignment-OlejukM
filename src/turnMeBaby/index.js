/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  if ( typeof str !== String) {
    throw new ("Error");
  }
    str = str + '';
    return str.split('').reverse().join('');
};

export default turnMeBaby;

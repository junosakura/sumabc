(function() {
  'use strict';

  const $aten = document.querySelector('#aten');
  const $str = document.querySelector('#str');
  const $num = document.querySelector('#num');
  const $sum = document.querySelector('#sum');
  const list = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const toNum = (s) => Number(s) || Math.max(temp.indexOf(s), 0);
  let temp = list;

  $aten.onchange = function() {
    temp = this.checked ? ' '.repeat(9) + list : list;
    $str.onchange();
  };

  $str.onchange = function() {
    const s = this.value.toUpperCase().split('');
    if (!s.length) { $num.value = null; $sum.value = null; return; }
    $num.value = s.reduce((a, c) => Array(a).concat(toNum(c)), 0);
    $sum.value = s.reduce((a, c) => a + toNum(c), 0);
  };

})();

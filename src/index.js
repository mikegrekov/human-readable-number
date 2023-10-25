module.exports = function toReadable (num = '') {
    let str = num.toString();
    let strarr = str.split('');
    const alph = [['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
                   ['ten', 'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
                   [undefined, undefined,'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
                  ];
    let result = [];
    let lastnum = (strarr[2] === '0') ? undefined : alph[0][Number(strarr[2])];
      switch (strarr.length) {
        case 1:
          return alph[0][Number(strarr[0])];
        case 2:
          if (strarr[0] === '1') {result.push(alph[1][Number(strarr[1])]); break};
          result.push(alph[2][Number(strarr[0])], (strarr[1] !== '0') ? alph[0][Number(strarr[1])] : undefined); break;
        case 3:
          if (strarr[1] === '1') {result.push(alph[0][Number(strarr[0])], 'hundred' , alph[1][Number(strarr[2])]); break};
          result.push(alph[0][Number(strarr[0])], 'hundred', alph[2][Number(strarr[1])], lastnum); break;
        default:
          return result;
      };
    return result.filter(a => a !== undefined).join(' ');
  }

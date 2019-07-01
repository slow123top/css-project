import * as moment from 'moment';
console.log(moment(new Date('1996/2/3')).format('YYYY MM DD'));
console.log(moment(new Date('1996/2/3')).format('YYYY年MM月DD日'));
console.log(moment(new Date('1996/2/3')).format('YYYY-MM-DD'));
console.log(moment(new Date('1996/2/3')).format('YYYY/MM/DD'));
console.log(moment(new Date('1996/2/3')).format('YYYY/MM/DD HH mm ss'));
console.log(moment(new Date('1996/2/3')).format('YYYY/MM/DD HH时mm分ss秒'));
module.exports = function toReadable(number) {
    var num = number.toString().split('');
    var a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = [];
    if (num.length === 3) {
        switch (num[0]) {
            case '1': str.push(a[1]);break;
            case '2': str.push(a[2]);break;
            case '3': str.push(a[3]);break;
            case '4': str.push(a[4]);break;
            case '5': str.push(a[5]);break;
            case '6': str.push(a[6]);break;
            case '7': str.push(a[7]);break;
            case '8': str.push(a[8]);break;
            case '9': str.push(a[9]);break;
        }
        str.push('hundred');
        if (num[1] == 1) {
            switch (num[2]) {
                case '0': str.push(a[10]); break;
                case '1': str.push(a[11]);break;
                case '2': str.push(a[12]); break;
                case '3': str.push(a[13]); break;
                case '4': str.push(a[14]); break;
                case '5': str.push(a[15]); break;
                case '6': str.push(a[16]); break;
                case '7': str.push(a[17]); break;
                case '8': str.push(a[18]); break;
                case '9': str.push(a[19]); break;
            };
        }
        else {
            switch (num[1]) {
                case '2': str.push(b[2]); break;
                case '3': str.push(b[3]); break;
                case '4': str.push(b[4]); break;
                case '5': str.push(b[5]); break;
                case '6': str.push(b[6]); break;
                case '7': str.push(b[7]); break;
                case '8': str.push(b[8]); break;
                case '9': str.push(b[9]); break;
            }
            switch (num[2]) {
                case '1': str.push(a[1]); break;
                case '2': str.push(a[2]); break;
                case '3': str.push(a[3]); break;
                case '4': str.push(a[4]); break;
                case '5': str.push(a[5]); break;
                case '6': str.push(a[6]); break;
                case '7': str.push(a[7]); break;
                case '8': str.push(a[8]); break;
                case '9': str.push(a[9]); break;
            }
        }
    }

    else if (num.length === 2) {
        if (num[0] == 1) {
            switch (num[1]) {
                case '0': str.push(a[10]);break;
                case '1': str.push(a[11]);break;
                case '2': str.push(a[12]);break;
                case '3': str.push(a[13]);break;
                case '4': str.push(a[14]);break;
                case '5': str.push(a[15]);break;
                case '6': str.push(a[16]);break;
                case '7': str.push(a[17]);break;
                case '8': str.push(a[18]);break;
                case '9': str.push(a[19]);break;
            };
        }
        else {
            switch (num[0]) {
                case '2': str.push(b[2]);break;
                case '3': str.push(b[3]);break;
                case '4': str.push(b[4]);break;
                case '5': str.push(b[5]);break;
                case '6': str.push(b[6]);break;
                case '7': str.push(b[7]);break;
                case '8': str.push(b[8]);break;
                case '9': str.push(b[9]);break;
            }
            switch (num[1]) {
                case '1': str.push(a[1]);break;
                case '2': str.push(a[2]);break;
                case '3': str.push(a[3]);break;
                case '4': str.push(a[4]);break;
                case '5': str.push(a[5]);break;
                case '6': str.push(a[6]);break;
                case '7': str.push(a[7]);break;
                case '8': str.push(a[8]);break;
                case '9': str.push(a[9]);break;
            }

        }
    }
    else if (num.length === 1) {
        switch (num[0]) {
            case '0': str.push('zero'); break;
            case '1': str.push(a[1]);break;
            case '2': str.push(a[2]);break;
            case '3': str.push(a[3]);break;
            case '4': str.push(a[4]);break;
            case '5': str.push(a[5]);break;
            case '6': str.push(a[6]);break;
            case '7': str.push(a[7]);break;
            case '8': str.push(a[8]);break;
            case '9': str.push(a[9]);break;
        }
    }
    return str.join(' ');
}

import lodash from 'lodash';
export function pasinate(items, pageNumber, paseSize) {
    const startIndex = (pageNumber - 1) * paseSize;
    return lodash(items).slice(startIndex).take(paseSize).value();

}
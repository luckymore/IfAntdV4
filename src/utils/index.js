import { arrayMoveImmutable } from 'array-move';
/**
 * 数据排序核心逻辑
 *
 * @param oldIndex 原始位置
 * @param newIndex 新位置
 * @param data 原始数组
 */
export function sortData({ oldIndex, newIndex }, data) {
    if (oldIndex !== newIndex) {
        const newData = arrayMoveImmutable([...(data || [])], oldIndex, newIndex).filter((el) => !!el);
        return [...newData];
    }
    /* istanbul ignore next */
    return null;
}

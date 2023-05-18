import { omit } from 'lodash';

export const handleMergedProductsWhenGetCategory = ({
    data,
    mergedKey,
    groupName,
}) => {
    if (data) {
        const getCategory = omit(JSON.parse(JSON.stringify(data[0])), [
            mergedKey,
        ]);
        const getChildren = data.reduce((acc: [], item: object | []) => {
            return acc.concat(item[mergedKey]);
        }, []);
        return Object.assign(getCategory, { [groupName]: getChildren });
    }
    return {};
};

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
        const getChildren = data.reduce((initial: [], item: object | []) => {
            return initial.concat(item[mergedKey]);
        }, []);
        return Object.assign(getCategory, { [groupName]: getChildren });
    }

    // Example
    // {
    // 	...getCategory,
    // 	[mergedKey]: {
    // 		...getChildren,
    // 	}
    // }
    return {};
};

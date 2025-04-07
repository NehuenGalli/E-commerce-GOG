const filterObject = (obj, keysToFilter) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keysToFilter.includes(key))
    );
};

export { filterObject };
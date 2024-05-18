const getAverage = (row, columns) => {
    let sum = 0;
    let count = 0;
    columns.forEach(column => {
        const value = row[column];
        if (value !== null && value !== undefined && value !== "-") {
            const numericValue = parseFloat(value);
            if (!isNaN(numericValue)) {
                sum += numericValue;
                count++;
            }
        }
    });
    return count > 0 ? (sum / count).toFixed(2) : '-';
};


export const getGlobalAverageColumns = (checkedCategories, categories) => {
    return Object.entries(checkedCategories).flatMap(([category, checks]) =>
        checks.average ? categories[category] :
            checks.allSubcategories ? categories[category] : []
    );
};

export const getGlobalAverage = (row, checkedCategories, categories) => {
    const columns = getGlobalAverageColumns(checkedCategories, categories);
    return getAverage(row, columns);
};


export const calculateAverage = (row, columns) => {
    if (!columns) return '-';
    const validValues = columns.map(col => parseFloat(row[col])).filter(val => !isNaN(val));
    const average = validValues.length > 0 ? validValues.reduce((a, b) => a + b, 0) / validValues.length : NaN;
    return isNaN(average) ? '-' : average.toFixed(2);
};

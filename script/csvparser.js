const processData = (cvs) => {
    const [headerLine, ...lines] = cvs.split(/\r\n|\n/);
    const headers = headerLine.split(',');
    return lines.map(line => {
        const data = line.split(',');

        return data.reduce((result, item, index) =>
            Object.assign(result, {[headers[index]]: item}), {})
    });
}

export {
    processData,
}

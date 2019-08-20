export default {
    getRootPath: pathName => {
        const matched = pathName.match(/.\//);

        if (matched) {
            const endIndex = matched.index + 1;

            return pathName.substring(0, endIndex);
        }

        return pathName;
    },
};

/**
 * Gets the path of input full path
 *
 * @param path - full path
 */
export function dirname(path: string) {
    let spos = path.lastIndexOf('/');
    return spos === -1 ? '' : path.substring(0, spos);
}

/**
 * Gets the filename of input full path
 *
 * @param path - full path
 * @param ext - keep extension or not
 */
export function basename(path: string, ext = true) {
    let spos = path.lastIndexOf('/');
    if (ext) {
        return spos === -1 ? path : path.substring(spos + 1);
    } else {
        let epos = path.lastIndexOf('.');
        if (epos < spos) {
            epos = -1;
        }
        if (spos === -1 && epos === -1) {
            return path;
        } else if (spos === -1) {
            return path.substring(0, epos);
        } else if (epos === -1) {
            return path.substring(spos + 1);
        } else {
            return path.substring(spos + 1, epos);
        }
    }
}

/**
 * Gets the file extension of input full path
 *
 * @param path - full path
 */
export function extname(path: string) {
    let ppos = path.lastIndexOf('.');
    return ppos === -1 ? path : path.substring(ppos + 1);
}

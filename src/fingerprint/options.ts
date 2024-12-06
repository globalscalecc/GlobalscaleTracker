export interface optionsInterface {
    exclude?: string[],
    include?: string[],
    webgl_runs?: number,
    canvas_runs?: number,
    permissions_to_check?: PermissionName[], // new option
    retries?: number, // new option
    timeout?: number, // new option
}

export let options: optionsInterface = {
    exclude: [],
}

export function setOption<K extends keyof optionsInterface>(key: K, value: optionsInterface[K]) {
    if (!['exclude', 'permissions_to_check', 'retries', 'timeout'].includes(key))
        throw new Error('Unknown option ' + key)
    if (['exclude', 'permissions_to_check'].includes(key) && !(Array.isArray(value) && value.every(item => typeof item === 'string')) )
        throw new Error('The value of the exclude and permissions_to_check must be an array of strings');
    if ([ 'retries', 'timeout'].includes(key) && typeof value !== 'number')
        throw new Error('The value of retries must be a number');
    options[key] = value;
}

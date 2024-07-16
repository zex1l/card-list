export const transformText = (text:string) :string => {
    return `${text.split(' ').slice(0, 7).join(' ')}...`
}
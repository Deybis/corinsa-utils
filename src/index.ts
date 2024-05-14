
/**
 * create URL by filters
 * @param filters type object 
 * @returns url
 */
export const createUrl = (filters:any):string =>{
    if(filters === null){
        return ''
    }    
    let url:string = ""
    Object.keys(filters).map(function(property:string, index:number) {
      let symbol = url === "" ? '?' : '&'
      let value = Object.values(filters)[index]
      url += value !== "" ? `${symbol}${property}=${value}` : ''
    });    
    return url
}
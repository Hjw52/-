export function FormatDate(date){
    var d = new Date(date).toJSON();
    return new Date(+new Date(d)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
}
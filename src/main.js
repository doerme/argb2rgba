var argb2rgba = function(argb){
    if(String(argb).length !== 9) {
        return null
    }
    var dealList = argb.split('')
    var opacity = Number('0x'+dealList[1] + dealList[2]) / 255
    var rvalue = Number('0x'+dealList[3] + dealList[4])
    var gvalue = Number('0x'+dealList[5] + dealList[6])
    var bvalue = Number('0x'+dealList[6] + dealList[8])
    return 'rgba(' +rvalue+ ','+gvalue+ ','+bvalue+ ','+opacity+')'
}

module.exports = argb2rgba
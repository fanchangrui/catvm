function xx(pr,fo,name_){
    let code = ''
    switch(typeof(pr[fo])){
        case 'function':
            let temp = name_ + '.prototype.' + fo
            code += temp + '=' + 'function ' + fo + '(){debugger}; catvm.safefunction('+temp+');'
            break
        case 'object':
            let temp = name_ + '.prototype.' + fo
            code += temp + '=' + 'catvm.proxy(class ' + fo + '{});'
            break
        default:
            code += name_ + '.prototype.' + fo + '=' + pr[fo] + ';'
            break

    }
    return code
}

function getcode(pr,name_){
    let code = ''
    for(let fo in pr.__proto__){
        code += xx(pr,fo,name_) + '\r\n'
    }
    return code
}


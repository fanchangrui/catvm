

catvm.proxy = function(o){
   if(catvm.memory.config.proxy == false){return o}
    return new Proxy(o,{
        set(target,key,value)
        {
            console.log('set',target,key,value);
            return Reflect.set(...arguments);
        },
        get(target,key,receiver)
        {
            console.log('get',target,key,target[key]);
            return target[key];
        }
    });

}


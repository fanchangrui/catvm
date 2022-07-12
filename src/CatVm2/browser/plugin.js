catvm.memory.Plugin = {}

const Plugin =function Plugin()
{
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Plugin);

catvm.memory.Plugin.iterator = function values(){
    debugger
}
catvm.safefunction(catvm.memory.Plugin.iterator);

Object.defineProperties(Plugin.prototype,{
    [Symbol.toStringTag]:{
        value:'Plugin',
        configurable:true,
    },
    [Symbol.iterator]:{
        value:catvm.memory.Plugin.iterator,
        configurable:true,
    }
})

Plugin.prototype.description = ''
Plugin.prototype.filename = ''
Plugin.prototype.name = ''
Plugin.prototype.length = 0

Plugin.prototype.item = function item(){
    debugger
}
catvm.safefunction(Plugin.prototype.item);
Plugin.prototype.namedItem = function namedItem(){
    debugger
}
catvm.safefunction(Plugin.prototype.namedItem);

for (let pr in Plugin.prototype) {
    if(typeof (Plugin.prototype[pr]) != 'function'){
        Plugin.prototype.__defineGetter__(pr,function(){
            return this[pr]
        }
        )
    }
    
}


catvm.memory.Plugin.new = function(data){
    let plugin = {}

    if(data != undefined){
        plugin.description = data.description
        plugin.filename = data.filename
        plugin.name = data.name

        if(data.MimeTypes != undefined){
          for (let mtindex = 0; mtindex < data.MimeTypes.length; mtindex++) {
              let mtindex = data.MimeTypes[mtindex]
              let mimeType = catvm.memory.MimeType.new(mtindex,plugin)

              plugin[mtindex] = mimeType
              plugin[mimeType.type] = mimeType

            
          }}
          plugin.length = data.MimeTypes.length
    }
    plugin.__proto__ = Plugin.prototype
    return plugin
}
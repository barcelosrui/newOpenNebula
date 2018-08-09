var OpenNebula = require('opennebula');
var tools = require("./tools");
//exports.one = new OpenNebula('oneadmin:opennebula', 'http://localhost:2633/RPC2');

var one  = new OpenNebula('oneadmin:opennebula', 'http://localhost:2633/RPC2');
exports.vms = (screen,list)=>{
    list.clearItems();
    one.getVMs((err, data) => {
        var listVMs = [];
        if (!err && data.length > 0) {
            listVMs = tools.saveToArray(data, listVMs);
            let insertVM = [];
            for (let index = 0; index < listVMs.length; index++) {
                insertVM[index] = listVMs[index].id + " " + listVMs[index].name;
            }
            list.setItems(insertVM);
            screen.render();
        }
    });
}

//criar máquina Virtual
exports.createVM = (name, ram, cpu) => {
    var vma = 'CONTEXT = [  NETWORK = "YES", SSH_PUBLIC_KEY = "root[SSH_PUBLIC_KEY]" ] \n CPU = "' + (cpu || 0.1) + '"\n  MEMORY = "' + (ram || 128) + '"\n NIC = [ NETWORK = "cloud" ]\n';
    var template = one.getTemplate(0);
    template.instantiate(name, undefined, vma, function (err, vm) {
        
    });

}

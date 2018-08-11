var OpenNebula = require('opennebula');
var tools = require("./tools");
var fs = require('fs');
//exports.one = new OpenNebula('oneadmin:opennebula', 'http://localhost:2633/RPC2');

var one = new OpenNebula('oneadmin:opennebula', 'http://localhost:2633/RPC2');

exports.vms = (screen, list) => {
    list.clearItems();
    one.getVMs((err, data) => {
        if (!err && data.length > 0) {
            var dir = './tmp';
            var listVM = tools.saveToArray(data, listVM);
            var txt = () => {
                var ids = '';
                for (let index = 0; index < listVM.length; index++) {
                    ids += listVM[index].id + ((index < listVM.length - 1) ? ',' : '');
                }
                return ids;
            }
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            // write to a new file named 2pac.txt
            fs.writeFile('tmp/ids.txt', txt(), (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;
                // success case, the file was saved
            });
        }
        list.setItems(showVMs(listVM));
        screen.render();
    }
    );
}
function showVMs(list) {
    var nList = [];
    for (let index = 0; index < list.length; index++) {
        nList[index] = list[index].id + " " + list[index].name;
    }
    return nList;
}
//criar máquina Virtual
exports.createVM = (name, ram, cpu) => {
    var vma = 'CONTEXT = [  NETWORK = "YES", SSH_PUBLIC_KEY = "root[SSH_PUBLIC_KEY]" ] \n CPU = "' + (cpu || 0.1) + '"\n  MEMORY = "' + (ram || 128) + '"\n NIC = [ NETWORK = "cloud" ]\n';
    var template = one.getTemplate(0);
    template.instantiate(name, undefined, vma, function (err, vm) {
        console.log(vm.id)
        if(err) throw err;
    });
}

exports.liveCycle = (idVm,opc,listVMsBox) => {
    var vm = one.getVM(idVm);
    vm.action(opc,(err)=>{
        if(err) throw err;
        this.vms(null,listVMsBox)
    });
}

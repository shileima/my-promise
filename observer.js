class Parent {
    constructor(name) {
        this.name = name
    }
    update(target, newStatus) {
        console.log(this.name + '被告知,' + target + '的状态：' + newStatus)
    }
}

class Baby {
    constructor(name) {
        this.name = name
        this.attachList = []
        this.status = '开心'
    }

    setStatus(newStatus) {
        this.status = newStatus
        this.attachList.forEach(fn => fn.update(this.name, this.status))
    }

    attach(p) {
        this.attachList.push(p)
    }
}

let baby = new Baby('宝宝')
let father = new Parent('爸爸')
let mother = new Parent('妈妈')

baby.attach(father)
baby.attach(mother)

baby.setStatus('要吃饭')

setTimeout(() => {
    baby.setStatus('要拉屎')
}, 2000)
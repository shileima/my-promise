const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

class Promise {
    constructor(excutor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];

        let resolve = (value) => {
            if (this.status === PENDING) {
                this.status = RESOLVED
                this.value = value
                this.resolveCallbacks.forEach(fn=>fn())
            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                this.rejectCallbacks.forEach(fn=>fn())
            }
        }
        try {
            excutor(resolve, reject)
        } catch (e) {
            reject(e)
        }

    }
    then(onfulfilled, onreject) {
        if (this.status === RESOLVED) {
            return onfulfilled(this.value)
        }
        if (this.status === REJECTED) {
            return onreject(this.reason)
        }
        if (this.status === PENDING) {
            this.resolveCallbacks.push(() => onfulfilled(this.value))
            this.rejectCallbacks.push(() => onreject(this.reason))
        }
    }

}

module.exports = Promise
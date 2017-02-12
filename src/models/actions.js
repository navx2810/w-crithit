import Data from "./data.json"

export default {
    ChangePath(path) {
        if(Data.view.path !== path) { Data.view.path = path }
    },

    CreateStack() {
        let { stacks } = Data.rolls
        stacks.push( { rolls: [] } )
    },

    CreateRoll(stack, dice, roll, results) {
        stack.rolls.push( { dice, roll, results } )
    }
}
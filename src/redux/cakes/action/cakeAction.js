import { BUY_CAKE } from './actions'

export const buyCake = (num = 1) => {
    return {
        type: BUY_CAKE,
        payload: num
    }
}

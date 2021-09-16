import {createStore} from "vuex";

const user = {
    state: () => ({
        name: 'lmonkey',
        slogen: 'abc'
    }),
    getters: {},
    mutations: {
        setname(state, payload) {
            state.name = payload;
        }
    },
    actions: {}
};
const article = {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
};
const cart = {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
};
const goods = {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
};

export default createStore({
    state: {
        num: 0,
        dnum: 0,
        cartlist: [
            {name: '细说PHP', price: 10},
            {name: '细说PHP', price: 20},
            {name: '细说PHP', price: 30},
            {name: '细说PHP', price: 40},
            {name: '细说PHP', price: 50},
        ]
    },
    getters: {
        // 第一个参数就是state
        vxnum(state) {
            return state.num * state.num;
        },
        totalprice(state) {
            return state.cartlist.reduce((s, n) => s + n.price, 0);
        },
        goodsgt(state) {
            return state.cartlist.filter(n => n.price > 30);
        },
    },
    mutations: {
        add(state) {
            state.dnum++;
        },
        sub(state) {
            state.dnum--;
        },
        // 使用带一个参数的
        add2(state, count) {
            console.log(count);
            state.dnum += count;
        },
        sub2(state, count) {
            console.log(count);
            state.dnum -= count;
        },
        // 使用带多个参数的
        add3(state, payload) {
            console.log(payload);
            state.dnum += (payload.count + payload.num);
        },
        sub3(state, p) {
            console.log(p);
            state.dnum -= (p.payload.count + p.payload.num);
        },
        cnum(state) {
            state.num = 99;
        },
        setname(state, playload) {
            state.num = playload;
        }
    },
    actions: {
        demo({state, commit}, payload) {
            setTimeout(() => {
                // context.state.num=99;
                // context.commit('cnum');
                state.num = 9;
                commit('cnum');
                console.log(payload);
            }, 3000)
        },
        fun() {

        }
    },
    modules: {
        user,
        article,
        cart,
        goods,
    },
});

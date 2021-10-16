Vue.component('filter-form', {
    data() {
        return {
            userSearch: '',
        }
    },
    template: `
                <form action="#" class="form-box" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                    <input class="inpt-search" type="search" v-model="userSearch">
                    <button class="btn-search">Поиск</button>
                </form>
            `
});
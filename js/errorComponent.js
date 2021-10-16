Vue.component('error-msg', {
    data() {
        return {
            message: "Ошибка подключения к серверу"
        }
    },
    template: ` 
                <div class="error-msg">
                        {{ message }}
                </div>
            `
})
var app = new Vue({
    el: "#root",
    data: {
        page: "home",
        loading: true,
        url: location.hash,
        mobMenu: false
    },
    mounted() {
        switch (this.url) {
            case "#about":
                this.page = "about"
                break;
            case "#home":
                this.page = "home"
                break;
            case "#download":
                this.page = "download"
                break;
            case "#support":
                this.page = "support"
                break;
        }
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    }
});
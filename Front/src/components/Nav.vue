<template>
    <div>
        <router-link to="user">Home</router-link> |
        <button @click="deconnection">deconnecter</button>
        <div>
            <h1>Bonjour {{user.name}}</h1>
        </div>
    </div>
</template>

<script>
    import router from "@/router"
    export default {
        name:"BackEnd",
        beforeCreate() {
            if(!localStorage.getItem("user")){
                router.push({name:"login"})
            }
        },
        data() {
            return {
                user:{}
            }
        },
        beforeMount() {
            this.user = JSON.parse (localStorage.getItem("user"))
        },

        methods: {
            deconnection(){
                localStorage.removeItem("user");
                router.push({name:"home"})
                }
            }
        }
    
</script>

<style scoped>

</style>
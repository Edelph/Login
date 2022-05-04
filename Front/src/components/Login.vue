<template><div>
        <NavBar/>
    <div class="form">
        <h1>se connecter</h1>
        <form  @submit.prevent="onClick" action="post">
            <label for="username">Nom d'utilisateur:</label>
            <input v-model="username" type="text" name="username" id="username">
            <label for="password">Mot de pass:</label>
            <input v-model="password" type="password" name="password" id="password">
            <input type="submit" value="se connecter">
        </form>

    </div>
    </div>
</template>

<script>
    import router from '../router'
    import NavBar from "./NavBar"
    import axios from "axios"
    export default {
        name:'LoginUser',
        components:{
            NavBar
        },
        data(){
            return{
                username:"",
                password:""
            }
        },
        methods: {
            onClick(){
                axios({
                    method:"post",
                    url:"http://localhost:3001/login",
                    data:{
                        username:this.username,
                        password:this.password
                    },
                    
                    responseType:"json"
                }).then(response=>{
                    if(response.data.userId){
                        localStorage.setItem("user",JSON.stringify(response.data))
                        router.push({
                            name:"user"
                        })
                    }
                
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        
    }
</script>

<style scoped>
    .form{
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        width: 400px;
        background-color: rgba(17, 17, 17, 0.753);
        padding: 20px;
        margin: 12px auto;
        border-radius: 4px;
        box-shadow: 1px 3px 5px rgba(0, 0, 0, .5);
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

    }
    form label{
        margin-bottom: 10px;
    }
    form input{
        margin-bottom: 10px;
        width: 350px;
        height: 30px;
    }
    input[type="submit"]{
        width: 40%;
        padding: .5em ;
        outline: none;
        align-self: center;
        margin-top: 15px;
        border-radius: 4px;
        border: 1px solid aqua;
        background-color: aqua;
    }

</style>
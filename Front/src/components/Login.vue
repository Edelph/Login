<template>
    <div>
        <h1>se connecter</h1>
        <form action="post">
            <label for="username">Nom d'utilisateur:</label>
            <input type="text" name="username" id="username">
            <label for="password">Mot de pass:</label>
            <input type="password" name="password" id="password">
            <input type="submit" value="se connecter">
        </form>

    </div>
</template>

<script>
    export default {
        name:'LoginUser',
        data(){
            return{
                name:"edelph"
            }
        }
        
    }
</script>

<style scoped>
    div{
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
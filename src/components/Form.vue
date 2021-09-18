<template>
    <form method="post" action="send.php">
        <input type="text"  name="name" placeholder="Ф.И.О."/>
        <input type="number"  name="phone" placeholder="Телефон"/>
        <input type="submit" name="send" value="Отправить">
    </form>
</template>

<script>
export default {
    name: 'Form',
    data () {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>
<template>
    <div class="list">
        <HomeContent/>
  </div>
</template>
<script>
  import HomeContent from "@/components/HomeContent.vue"
    export default {
        name: 'list',
        components: {
            HomeContent
        }
  }


</script>

<style scoped>
 h1{
     color: red
 }
</style>

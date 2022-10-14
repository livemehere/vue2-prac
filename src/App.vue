<template>
  <div>
    <h1>App Component!</h1>
    <Header>I am header</Header>
    <content-section>
      content!
    </content-section>
    <Footer myfooter>footer2</Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import ContentSection from '@/components/ContentSection.vue'
  import Footer from "@/components/Footer.vue";

  export default {
    components:{
      Header,
      ContentSection,
      Footer
    }
  }
</script>

<style>
  [myfooter] .hi{
    background-color: #333;
    color: #fff;
  }
</style>
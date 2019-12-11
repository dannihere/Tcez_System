<template>
  <div id="app">
    <Header></Header>
    <div class="diii"></div>

    <router-view/>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

  .diii{
    height: 110px;

    width: 100%;
  }

  @media screen and (max-width: 997px) {

    .diii{
      height: 40px;

      width: 100%;
    }
  }

</style>

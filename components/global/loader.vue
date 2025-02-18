<template>
    <div>
        <div class="loader-page">
      <div class="d-flex flex-column align-items-center main">
        <NuxtImg class="animated-image" src="/images/icons/loaderLogo.svg" alt="loader img" />

      </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
// ::-webkit-scrollbar {
//   display:none;
// }
  .loader-page {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000096;

    z-index: 5555555555;
    text-align: center;
img{
    width: 125px;
}
  }
  

</style>
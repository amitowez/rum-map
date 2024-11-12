<template>
    <div class="app-container">
        <MapContainer />
    </div>
</template>

<script>
import MapContainer from "@/components/MapContainer.vue";
export default {
  components:{MapContainer}
};
</script>

<style>
.app-container{
    height: 98vh;
    width: 99.2vw;
}
</style>
<template>
    <div ref="map"
         class="map-container"/>
</template>

<script>
import { initMap } from "./assetsMap/initMap";
export default {
  data(){
    return {
      MAP: "",
      VIEW: ""
    };
  },
  async mounted(){
    const resultInit = await initMap(this.$refs["map"]);
    this.MAP = resultInit.map;
    this.VIEW = resultInit.view;
    console.log(this.MAP, this.$refs.map);
  },
  methods:{

  }
};

</script>

<style>
.map-container{
    height: 100%;
    width: 100%;
}
</style>
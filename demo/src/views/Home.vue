<template>
  <div class="home">
    <HomeList/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeList from "@/components/HomeList";

export default {
  name: "home",
  components: {
    HomeList
  },
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
    //console.log(val);
    }
  }
};
</script>

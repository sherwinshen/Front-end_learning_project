<template>
  <div class="home">
    <ComponentA></ComponentA>
    <ComponentB></ComponentB>
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";

export default {
  name: 'Home',
  components: {
    ComponentA,
    ComponentB
  }
}
</script>

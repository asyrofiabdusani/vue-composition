<template>
    <div>
        <h2>Component A</h2>
        <ComponentB />
    </div>
</template>

<script>
import ComponentB from "./ComponentB.vue";
export default {
    name: "ComponentA",
    components: {
        ComponentB,
    },
};
</script>

<style lang="scss" scoped></style>

<template>
    <div>
        <h2>Component B</h2>
        <ComponentC />
    </div>
</template>

<script>
import ComponentC from "./ComponentC.vue";
export default {
    name: "ComponentB",
    components: {
        ComponentC,
    },
};
</script>

<style lang="scss" scoped></style>

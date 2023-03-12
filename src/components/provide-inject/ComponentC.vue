<template>
    <div>
        <h2>Component C</h2>
        <p>Value inject = {{ fName }} {{ lName }}</p>
        <p>Value inject 2 = {{ injectedValue2 }}</p>
    </div>
</template>

<script>
import { inject, toRefs } from "vue";

export default {
    name: "ComponentC",
    setup() {
        const injectedValue = inject("provideVal", {});
        const injectedValue2 = inject("provideVal2", 0);

        return {
            ...toRefs(injectedValue),
            injectedValue2,
        };
    },
};
</script>

<style lang="scss" scoped></style>

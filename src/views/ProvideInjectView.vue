<template>
    <div>
        <h1>Provided Component</h1>
        <p>Provided value = {{ fName }} {{ lName }}</p>
        <p>Provided value 2 = {{ counter }}</p>
        <ComponentA />
    </div>
</template>

<script>
import { provide, reactive, ref, toRefs } from "vue";
import ComponentA from "@/components/provide-inject/ComponentA.vue";

export default {
    name: "ProvideInjectView",
    components: {
        ComponentA,
    },
    setup() {
        const state = reactive({
            fName: "Barry",
            lName: "Susan",
        });

        provide("provideVal", state);

        const counter = ref(5);

        provide("provideVal2", counter);

        return {
            ...toRefs(state),
            counter,
        };
    },
};
</script>

<style lang="scss" scoped></style>

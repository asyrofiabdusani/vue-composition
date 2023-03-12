<template>
    <div>
        <h1>Using Method</h1>
        <h2>
            To using method, we can declare the function in the setup like
            usual, that is function name(){}
        </h2>
        <p>{{ counter }}</p>
        <button @click="increaseCounter">Increase Counter</button>
        <hr />
        <p>{{ fName }} {{ lName }}</p>
        <button @click="changeName">Change Name</button>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";

export default {
    name: "MethodVue",
    setup() {
        const counter = ref(0);

        function increaseCounter() {
            counter.value += 1;
        }

        const state = reactive({
            fName: "ana",
            lName: "Muna",
        });

        function changeName() {
            (state.fName = "Budi"), (state.lName = "Gunawan");
        }

        return {
            counter,
            increaseCounter,
            ...toRefs(state),
            changeName,
        };
    },
};
</script>

<style lang="scss" scoped></style>

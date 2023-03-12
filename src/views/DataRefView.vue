<template>
    <div>
        <h1>Data Ref</h1>
        <h2>
            Data Ref has similar function with Data in the optional API. <br />
            Make the component possible to view data and change the value of
            data. Without ref, components didn't know which one must be executed
        </h2>
        <p>His name is {{ name }}</p>
        <p>{{ greet }}</p>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "DataRefView",
    setup() {
        const name = ref("");
        name.value = "Musa";
        const greet = `Hello ${name.value}`;

        return {
            name,
            greet,
        };
    },
};
</script>

<style lang="scss" scoped></style>

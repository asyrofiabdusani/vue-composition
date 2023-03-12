<template>
    <div>
        <h1>Data Reactive</h1>
        <h2>
            Data Reactive actually similar enough with Data Ref, but can specify
            the usage <br />
            To return reactive, use ...toRefs(varReactive) <br />use ref when
            dealing with primitive types, like string, boolean, etc. <br />
            when we dealing with group of primitive types, we can use reactive
            function
        </h2>
        <p>{{ dataPerson }}</p>
        <p>{{ state.fName }} {{ state.lName }}</p>
        <p>{{ fName }} {{ lName }}</p>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
    name: "DataReactiveView",
    setup() {
        const state = reactive({
            fName: "Budi",
            lName: "Setiawan",
            city: "Jakarta",
        });

        const dataPerson = `name is ${state.fName} ${state.lName}, and I live in ${state.city}`;

        return {
            state,
            dataPerson,
            ...toRefs(state),
        };
    },
};
</script>

<style lang="scss" scoped></style>

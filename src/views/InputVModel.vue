<template>
    <div>
        <input type="text" placeholder="First name" v-model="completeName" />
        <p>First Name : {{ completeName }}</p>
        <hr />
        <input type="text" placeholder="First name" v-model="fName" />
        <input type="text" placeholder="Last name" v-model="lName" />

        <p>First Name : {{ fName }}</p>
        <p>Last Name : {{ lName }}</p>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";

export default {
    nama: "InputVModel",
    setup() {
        const completeName = ref("");
        const state = reactive({
            fName: "",
            lName: "",
        });

        return {
            completeName,
            ...toRefs(state),
        };
    },
};
</script>

<style lang="scss" scoped></style>

<template>
    <div>
        <input type="text" placeholder="First name" v-model="fName" />
        <input type="text" placeholder="Last name" v-model="lName" />
        <p>complete name = {{ fullName }}</p>
    </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue";

export default {
    name: "ComputedView",
    setup() {
        const state = reactive({
            fName: "",
            lName: "",
        });
        const fullName = computed(function () {
            return `${state.fName} ${state.lName}`;
        });
        return {
            ...toRefs(state),
            fullName,
        };
    },
};
</script>

<style lang="scss" scoped></style>

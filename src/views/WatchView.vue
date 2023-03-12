<template>
    <div>
        <input type="text" placeholder="First name" v-model="fName" />
        <input type="text" placeholder="Last name" v-model="lName" />
    </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";

export default {
    name: "WatchVue",
    setup() {
        const state = reactive({
            fName: "",
            lName: "",
        });

        watch(
            () => {
                return { ...state };
            },
            function (newVal, oldVal) {
                console.log("first old name:", oldVal.fName);
                console.log("first new name:", newVal.fName);
                console.log("lasr old name:", oldVal.lName);
                console.log("lasr new name:", newVal.lName);
            }
        );

        return {
            ...toRefs(state),
        };
    },
};
</script>

<style lang="scss" scoped></style>

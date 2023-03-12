<template>
    <div>
        <CounterClick />
        <hr />
        <CounterHover />
    </div>
</template>

<script>
import CounterClick from "@/components/composable/CounterClick.vue";
import CounterHover from "@/components/composable/CounterHover.vue";

export default {
    name: "ComposableView",
    components: {
        CounterClick,
        CounterHover,
    },
};
</script>

<style lang="scss" scoped></style>

import { ref } from "vue";

export default function useCounter(initial = 0, step = 1) {
    const counter = ref(initial);

    function increaseCounter() {
        counter.value += step;
    }

    return {
        counter,
        increaseCounter,
    };
}

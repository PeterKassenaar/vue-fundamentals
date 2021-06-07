<template>
    <div class="about">
        <h1>This is an about page</h1>
        <VacationPicker/>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import VacationPicker from '@/components/VacationPicker.vue';
    //
    @Component({
        components: {VacationPicker},
    })
    export default class About extends Vue {
        constructor() {
            super();
            console.log('constructor for About page...');
        }
    }
</script>

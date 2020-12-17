<template>
    <vs-row>
        <vs-col vs-lg="3" vs-xs="12">
            <vs-card>
                <h4 class="mb-1">+100%</h4>
                <span>Total Sales</span>
                <vs-progress :percent="100" color="primary">primary</vs-progress>
            </vs-card>
        </vs-col>
        <vs-col vs-lg="3" vs-xs="12">
            <vs-card>
                <h4 class="mb-1">-20%</h4>
                <span>Monthly Sales</span>
                <vs-progress :percent="70" color="danger">primary</vs-progress>
            </vs-card>
        </vs-col>
        <vs-col vs-lg="3" vs-xs="12">
            <vs-card>
                <h4 class="mb-1">50%</h4>
                <span>Yearly Sales</span>
                <vs-progress :percent="50" color="success">primary</vs-progress>
            </vs-card>
        </vs-col>
        <vs-col vs-lg="3" vs-xs="12">
            <vs-card>
                <h4 class="mb-1">30%</h4>
                <span>Company Growth</span>
                <vs-progress :percent="30" color="warning">primary</vs-progress>
            </vs-card>
        </vs-col>
    </vs-row>    
</template>
<script>
export default {
    name: "States"
}
</script>

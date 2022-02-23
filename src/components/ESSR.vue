<template>
    <div class="essr">
        <div class="row">
            <p class="col">Earned: {{earned}}</p>
            <p class="col">Saved: {{saved}}</p>
        </div>
        <div class="row">
            <p class="col">Spent: {{spent}}</p>
            <p class="col">Remaining: {{remaining}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'essr',
    props: [
        'earned',
        'spent',
        'saved',
        'remaining'
    ],
    data () {
        return {
        }
    },
}
</script>
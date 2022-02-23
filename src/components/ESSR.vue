<template>
    <div class="essr">
        Earned: {{earned}}
        <br/>
        Saved: {{saved}}
        <br/>
        Spent: {{spent}}
        <br/>
        Remaining: {{remaining}}
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
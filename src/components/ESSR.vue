<template>
    <div class="essr">
        <div class="row">
            <div class="col d-flex justify-content-between"><p>Earned:</p> <p>{{earned}}</p></div>
            <div class="col d-flex justify-content-between"><p>Saved:</p> <p>{{saved}}</p></div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-between"><p>Spent:</p> <p>{{spent}}</p></div>
            <div class="col d-flex justify-content-between"><p>Remaining:</p> <p>{{remaining}}</p></div>
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
<template>
    <svg height="44px" width="20px" fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" 
            viewBox="20 14 10 22" enable-background="new 0 0 50 50" xml:space="preserve">
        <template v-if="!circle">
            <polygon points="20,28 22,28 22,35 28,35 28,28 30,28 30,21 20,21 "/><rect x="23" y="15" width="4" height="4"/>
        </template>   
        <template v-else>
            <circle cx="25" cy="24" r="5"/>
        </template>  
    </svg>
</template>

<script>
export default {
    props: ["circle"]
}
</script>
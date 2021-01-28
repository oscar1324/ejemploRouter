<template>
    <div class="biblio">
        <ol>
            <li><b>AUTORES</b></li>
            <ul>
            <li>jose arturo</li>
            <li>juan hidalgo</li>
            <li>mikel de la calle</li>
            <li>jose arturo</li>
            <li>juan hidalgo</li>
            <li>mikel de la calle</li>
            <li>jose arturo</li>
            <li>juan hidalgo</li>
            <li>mikel de la calle</li>
            </ul>
        </ol>
        <casa-libro></casa-libro>
    </div>
</template>
<script>
//importación
import CasaLibro from '@/components/CasaLibro.vue'

export default {
    name: "casa-libro",
    components:{
        CasaLibro
    }
}
</script>
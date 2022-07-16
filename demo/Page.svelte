<script>
  import { onMount } from 'svelte';
  import { remark } from 'remark';
  import remarkHtml from 'remark-html';
  import remarkFigma from '../dist/esm'

  const processor = remark().use(remarkHtml).use(remarkFigma);
  let div;

  onMount(() => {
    div.innerHTML =  processor.processSync('https://www.figma.com/file/RPZWogZCTMa2UFYbPJXZRF/System-Starter-Kit-(Community)?node-id=25%3A824').toString()
  })

</script>

<div bind:this="{div}">

</div>

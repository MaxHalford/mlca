<template>
  <div>
    <NuxtLayout>
      <div style="display: flex; flex-direction: column">
        <h1>{{ route.path }}</h1>
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute()

let greeter = new Element("world");

console.log(greeter.inputs)
console.log(greeter.take(10).amount); // 100
</script>

<style>
body {
  margin:5%auto;
  background: #faf4ed;
  font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 16px;
  line-height: 1.8;
  text-shadow: 0 1px 0 #faf4ed;
  max-width: 73%
}
code{
  background:#fffaf3
}

a{
  border-bottom:1px solid #d7827e;
  color:#d7827e;
  text-decoration:none
}

a:hover{
  border-bottom:0
}

b,body,strong{
  color:#575279
}

h1,h2,h3,h4,h5,h6 {
  color:#907aa9
}

@media (prefers-color-scheme: dark) {
body{
  background:#232136;
  text-shadow:0 1px 0#232136;
}
code{
  background:#2a273f
}

a{
  border-bottom:1px solid #ea9a97;
  color:#ea9a97;
}

b,body,strong{
  color:#e0def4
}

h1,h2,h3,h4,h5,h6{color:#c4a7e7}
}
</style>

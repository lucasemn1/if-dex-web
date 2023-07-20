<template>
  <div class="page">
    <div class="content">
      <main>
        <h1>Hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ut obcaecati minima distinctio. Vitae aperiam officiis possimus,
          architecto eaque distinctio provident, atque dignissimos hic nihil
          nisi. Officiis dolor voluptatibus at.
        </p>
      </main>
      <nav>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quis
          sapiente, a excepturi nostrum hic atque officia aspernatur soluta
          accusantium id rem consectetur porro totam corrupti recusandae
          voluptatum commodi fugit!
        </p>
      </nav>
    </div>
  </div>
</template>
x

<style scoped>
.page {
  background-color: rgb(var(--background-1-color));
  color: rgb(var(--background-1-contrast-color));
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

main {
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: rgb(var(--theme-1-color));
  color: rgb(var(--theme-1-contrast-color));
  width: 100%;
  height: 500px;
}

nav {
  background-color: rgb(var(--theme-2-color));
  color: rgb(var(--theme-2-contrast-color));
}
</style>

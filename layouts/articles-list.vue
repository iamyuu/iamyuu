<script setup lang="ts">
// @ts-nocheck
import { withTrailingSlash } from 'ufo';

const { data: _articles } = await useAsyncData('articles', () =>
  queryContent(withTrailingSlash('articles'))
    .where({ 
      draft: { $ne: true }
    })
    .sort({ date: -1 })
    .find()
);
const articles = computed(() => _articles.value || []);
</script>

<template>
  <div v-if="articles?.length" class="articles-list">
    <article
      v-for="article in articles"
      :key="article._path"
      :data-content-id="article?._id"
      class="content"
    >
      <ProseA :to="article._path" class="headline">
        {{ article.title }}
      </ProseA>
      <time>
        {{ formatDate(article.date) }}
      </time>
    </article>
  </div>

  <div v-else class="empty-state">
    <p class="message">
      Seems like there are no articles yet.
    </p>
  </div>
</template>

<style scoped lang="ts">
css({
  '.empty-state': {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '.message': {
      fontSize: '{text.2xl.fontSize}',
      lineHeight: '{text.2xl.lineHeight}',
      fontWeight: '{fontWeight.medium}',
    },
  },
  '.articles-list': {
    display: 'flex',
    flexDirection: 'column',
    gap: '{space.2}',
    '.content': {
      display: 'flex',
			alignItems: 'center',
      justifyContent:  'space-between',
      '.headline': {
        lineClamp: 2,
        text: 'xl',
      },
      time: {
        text: 'sm',
        color: '{color.gray.500}',
        '@dark': {
          color: '{color.gray.500}',
        }
      }
    },
  }
})
</style>

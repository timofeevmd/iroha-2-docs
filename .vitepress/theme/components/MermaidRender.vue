<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useParamScope, useTask } from '@vue-kakuyaku/core'
import { computedEager, templateRef, useIntersectionObserver } from '@vueuse/core'
import { useData } from 'vitepress'
import { renderSvg } from '../mermaid-render'
import { SSpinner, SAlert, Status } from '@soramitsu-ui/ui'

const props = defineProps<{ id: string; text: string }>()

const textDecoded = computed(() => decodeURIComponent(props.text))

const isVisibleOnce = ref(false)
useIntersectionObserver(templateRef('root'), ([{ isIntersecting }]) => {
  isVisibleOnce.value ||= isIntersecting
})

const { isDark } = useData()
const theme = computedEager<'dark' | 'light'>(() => (isDark.value ? 'dark' : 'light'))

const scope = useParamScope(
  () =>
    isVisibleOnce.value && {
      key: `${props.id}-${props.text}-${theme.value}`,
      payload: { id: props.id, text: textDecoded.value, theme: theme.value },
    },
  ({ payload: { id, text, theme } }) => {
    return useTask(
      () =>
        renderSvg(id, text, {
          theme,
        }),
      {
        immediate: true,
      },
    )
  },
)

const taskState = computed(() => scope.value?.expose.state)
</script>

<template>
  <div ref="root">
    <template v-if="taskState && !taskState.pending">
      <pre
        v-if="taskState.fulfilled"
        data-mermaid
        class="flex justify-center"
        v-html="taskState.fulfilled.value.svg"
      />
      <template v-else>
        <SAlert
          title="Unable to render the diagram"
          :status="Status.Error"
        >
          <template #description>
            {{ taskState.rejected.reason }}
          </template>
        </SAlert>
        <div class="language-mermaid">
          <pre><code>{{ textDecoded }}</code></pre>
        </div>
      </template>
    </template>

    <div
      v-else
      class="flex justify-center p-8"
    >
      <SSpinner />
    </div>
  </div>
</template>

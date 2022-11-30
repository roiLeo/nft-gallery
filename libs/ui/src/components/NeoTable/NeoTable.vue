<template>
  <o-table :data="data">
    <o-table-column
      v-for="(column, index) in columns"
      :key="index"
      v-slot="{ row }"
      v-bind="column">
      {{ row[column.field] }}
    </o-table-column>
  </o-table>
</template>

<script lang="ts" setup>
import { OTable, OTableColumn } from '@oruga-ui/oruga'

defineProps<{
  data: []
  columns: []
}>()
</script>

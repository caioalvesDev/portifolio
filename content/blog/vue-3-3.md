---
title: Anunciando o Vue 3.3
description: Esta versão se concentra em melhorias na experiência do desenvolvedor e correções de bugs.
date: 2023-05-24
cover: vue3_3.png
tags:
  - vue
---

# Anunciando o Vue 3.3

Hoje temos o prazer de anunciar o lançamento do Vue 3.3 "Rurouni Kenshin"!

![Earth from Space](/images/blog/vue3_3.png){.rounded-lg}

Esta versão se concentra em melhorias na experiência do desenvolvedor – em particular, no uso de SFC `<script setup>` com TypeScript. Juntamente com a versão 1.6 do Vue Language Tools (anteriormente conhecido como Volar), resolvemos muitos problemas de longa data ao usar Vue com TypeScript.

This post provides an overview of the highlighted features in 3.3. For the full list of changes, please consult the full changelog on GitHub.

## `<script setup>` + Melhorias no TypeScript DX

### Suporte a tipos importados e complexos em macros

Anteriormente, os tipos usados ​​na posição do parâmetro de tipo de defineProps e defineEmits eram limitados a tipos locais e suportavam apenas literais de tipo e interfaces. Isso ocorre porque o Vue precisa ser capaz de analisar as propriedades na interface props para gerar opções de tempo de execução correspondentes.

Esta limitação agora foi resolvida em 3.3. O compilador agora pode resolver tipos importados e oferece suporte a um conjunto limitado de tipos complexos:


```vue
<script setup lang="ts">
import type { Props } from "./foo";

// imported + intersection type
defineProps<Props & { extraProp?: string }>();
</script>
```

Observe que o suporte a tipos complexos é baseado em AST e, portanto, não é 100% abrangente. Alguns tipos complexos que requerem análise de tipo real, por ex. tipos condicionais, não são suportados. Você pode usar tipos condicionais para o tipo de um único adereço, mas não para o objeto adereços inteiro.
[//]: # (Date)

## Principles of State Management

<small><i>May 14, 2021</i></small>

State management . There are many solutions, asdfsadf

Local

SOLID

single source of truth

event bus
global
everything is a mutation in react

#### *AnotherParentViewComponent.vue*
```vue
<template>
<ReusableChildComponent :firstName="firstName" :lastName="lastName">
	<template #body="{ firstName, lastName }">
        {{ firstName }} {{ lastName }}
	</template>
</ReusableChildComponent>
</template>

<script setup>
import ReusableChildComponent from './ReusableChildComponent'
</script>
```

#### *AnotherParentViewComponent.vue*
```react
<template>
<ReusableChildComponent :firstName="firstName" :lastName="lastName">
	<template #body="{ firstName, lastName }">
        {{ firstName }} {{ lastName }}
	</template>
</ReusableChildComponent>
</template>

<script setup>
import ReusableChildComponent from './ReusableChildComponent'
</script>
```
### Conclusion

Effective use of slots keeps components extensible, concise, and maintainable. Scoped slots take this a step further by allowing parents to manipulate props in children without initially passing that state down, greatly simplifying state management and reducing the LOC needed to write declarative and extensible components.

### Further Reading

<ul class="md-list"><li><a href="#"><span>Vue 3 Scope Slots Documentation</span></a></li></ul>
<ul class="md-list"><li><a href="#"><span>Helpful video on scoped slots</span></a></li></ul>
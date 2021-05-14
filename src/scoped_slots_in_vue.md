[//]: # (Date)

## Scoped Slots in Vue

<small><i>April 28, 2021</i></small>

Slots in general and particularly scoped slots are one of Vue's distinguishing features in extensibility and component reusability.

This writeup touches on a simple example of the less-utilized but very useful Vue features.

### What is a scoped slot?

Consider the following reusable layout-esque child component, which allows us to apply the same header/footer to a variety of content bodies.

#### *ReusableChildComponent.vue*
```vue
<template>
    <div class="container">
        <div class="header"></div>
        <slot name="body" />
        <div class="footer"></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	firstName: String,
	lastName: String
})
</script>
```

The "body" `slot` is a named slot, useful for templates with multiple slots (since there is only one slot, the abbreviated default syntax could be used instead here).

?> _TODO_ Scoped slots are slots in which the child components expose access to their reactive state to the parent. This is an inversion of the normal parent-pass-to-child data binding, which is uesful in writing reusable, concise components.

Consider writing two views, one which displays the `firstName` prop in `ReusableChildComponent`, and one which displays both `firstName` and `lastName`. To avoid duplicating or keeping track of state across the two parent views and the child, scoped slots allow parents to render child state in a particular way without having direct access to it (i.e., without having to pass down that state as props to the child, potentially up and then down again).

To expose the `firstName` and `lastName` to the two parent components,

` <slot name="body" />`

in the child component becomes:

` <slot name="body" :firstName="firstName" :lastName="lastName" />`

To access this state in the parent, the props being passed from the child must be declared on the invocation of the child in the parent:

`<ReusableChildComponent :firstName="firstName">`

And finally the template for the `body` slot must include the desired child state to include in the parent:

`<template #body="{ firstName }">`

Now the child's state can be manipulated by the parent(s) as shown in the below components.

#### *ParentViewComponent.vue*
```vue
<template>
<ReusableChildComponent :firstName="firstName">
	<template #body="{ firstName }">
        {{ firstName }}
	</template>
</ReusableChildComponent>
</template>

<script setup>
import ReusableChildComponent from './ReusableChildComponent'
</script>
```

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
### Conclusion

Effective use of slots keeps components extensible, concise, and maintainable. Scoped slots take this a step further by allowing parents to manipulate props in children without initially passing that state down, greatly simplifying state management and reducing the LOC needed to write declarative and extensible components.

### Further Reading

<ul class="md-list"><li><a href="#"><span>Vue 3 Scope Slots Documentation</span></a></li></ul>
<ul class="md-list"><li><a href="#"><span>Helpful video on scoped slots</span></a></li></ul>
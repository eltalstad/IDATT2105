<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>

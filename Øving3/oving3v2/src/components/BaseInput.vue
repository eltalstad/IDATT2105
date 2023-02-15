<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
        :id="id"
        :value="modelValue"
        :placeholder="label"
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
      type: [String, Number],
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

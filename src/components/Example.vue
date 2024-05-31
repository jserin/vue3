<template>
  <main>
    <div class="container py-4">
      <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
      <LabelInput label="이름" data-id="haha"></LabelInput>
      
      <hr>
      <FancyButton>click! <span style="color: red;">@@@</span></FancyButton>
      <FancyButton>
        <template v-slot="{fancyMessage}">
          {{ fancyMessage }}
        </template>
      </FancyButton>

      <AppCard>
        <!-- <template #[slotArgs]>This is Title</template> -->
        <!-- <template #default>This is body</template> -->
        <!-- 암시적으로 default 슬롯에 들어감
        <template #footer>This is footer</template> -->
        <template #[slotArgs]="{headerMessage}">
          {{ headerMessage }}
        </template>
        <template #default="{childMessage, helloMessage}">
          {{ childMessage }}
          <br>
          {{helloMessage}}
        </template>
        <template #footer="{footerMessage}">
          {{ footerMessage }}
        </template>
      </AppCard>
      <hr>
      <AppCard>
        this it content2
      </AppCard>
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';

export default {
  components: {
    MyButton, LabelInput, FancyButton, AppCard,
  },
  setup () {
    const sayHello = () => {
      alert('hi~~~');
    };

    const slotArgs = ref('header');

    return {sayHello, slotArgs}
  }
}
</script>

<style lang="scss" scoped>

</style>
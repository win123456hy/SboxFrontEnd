<template>
  <div>
    <Steps :current="currentStep">
      <Step title="Register" content="Đăng kí tài khoản"></Step>
      <Step title="Terms and Services" content="Điều khoản và dịch vụ"></Step>
      <Step title="Login" content="Đăng nhập"></Step>
      <Step title="Completed" content="Hoàn thành"></Step>
    </Steps>
    <div>
      <Step1 v-if="currentStep==0" @next="handleNextEvent"/>
      <Step2 v-if="currentStep==1" @next="handleNextEvent"/>
      <Step3 v-if="currentStep==2" @next="handleNextEvent"/>
      <Step4 v-if="currentStep==3" @next="handleNextEvent"/>

    </div>
  </div>
</template>

<script>
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";
import Step4 from "./Step4.vue";

export default {
  name: "DashBoard",
  components: {
    Step1,
    Step2,
    Step3,
    Step4
  },
  data() {
    return {
      currentStep: 0,
    };
  },

  methods: {
    handleNextEvent(value){
      this.currentStep=value;
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

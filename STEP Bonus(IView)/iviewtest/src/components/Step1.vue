<template>
  <div>
    <h1>Step 1</h1>
    <br><br>
    <div>
          <Form ref="formItem" :model="formItem" :label-width="90" :rules="ruleInline">
        <FormItem label="Email" prop="email">
          <Input v-model="formItem.email" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="Username" prop="username">
          <Input v-model="formItem.username" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input v-model="formItem.password" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="Re-type Password" prop="repassword">
          <Input v-model="formItem.repassword" placeholder="Enter something..."/>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formItem')">Submit</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step1",
  data() {
    return {
      formItem: {
        email: "",
        username: "",
        password: "",
        repassword: "",
        radio: "male",
        date: ""
      },
      ruleInline: {
        email: [
          {
            required: true,
            message: "Please fill in the email",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The email length cannot be less than 6 bits",
            trigger: "blur"
          }
        ],
        username: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The username length cannot be less than 6 bits",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ],
        repassword: [
          {
            required: true,
            message: "Please fill in the re-password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The re-password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if(this.formItem.password!=this.formItem.repassword){
            this.$Message.error("Password and Re-type Password are not equal");
          }
          else{
          this.$Message.success("Success!");
          this.$emit("next", 1);
          }
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 64px;
  line-height: 500px;
}
</style>

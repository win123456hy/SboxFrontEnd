<template>
  <div>
    <Form ref="formItem" :model="formItem" :label-width="80" :rules="ruleInline">
        <FormItem label="Username" prop="username">
          <Input v-model="formItem.username" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input v-model="formItem.password" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="Re-type Password" prop="repassword">
          <Input v-model="formItem.repassword" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="Birthday">
            <Row>
                <Col span="11"/>
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                <Col span="2" style="text-align: center"/>
            </Row>
        </FormItem>
        <FormItem label="Radio">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formItem')">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>

export default {
  name: "Register",
  data() {
    return {
      formItem: {
        username: "",
        password: "",
        repassword: "",
        radio: "male",
        date: ""
      },
      ruleInline: {
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
  beforeCreate(){
    localStorage.clear();
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if(this.formItem.password!=this.formItem.repassword){
            this.$Message.error("Password and Re-type Password not equal!");
          }
          else{
            this.$Message.success("Success!");
            localStorage.setItem("username",this.formItem.username);
            localStorage.setItem("password",this.formItem.password);
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
</style>

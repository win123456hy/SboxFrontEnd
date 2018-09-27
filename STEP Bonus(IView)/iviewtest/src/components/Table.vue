<template>
  <div>
    <Modal
        v-model="modal1"
        title="Add Item"
        @on-ok="ok"
        @on-cancel="cancel">
      <Form ref="formItem" :model="newUser" :label-width="90" :rules="ruleInline">
        <FormItem label="Name" prop="name">
          <Input v-model="newUser.name" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="Username" prop="username">
         <Input v-model="newUser.username" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="Email" prop="email">
         <Input v-model="newUser.email" placeholder="Enter something..."/>
        </FormItem>

        <FormItem label="Phone" prop="phone">
         <Input v-model="newUser.phone" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="Website" prop="website">
         <Input v-model="newUser.website" placeholder="Enter something..."/>
        </FormItem>

        
      </Form>
    </Modal>
    <Modal
        v-model="modal2"
        title="Delete Item"
        @on-ok="deleteItem"
        @on-cancel="cancel">
        <p>Are you sure?</p>
    </Modal>

    <div style="display:flex; justify-content: space-between; margin-bottom: 15px">
      <Button type="success" @click="modal1 = true">Add</Button>
      <Input style="width:250px;" search enter-button v-model="keyword" @on-keyup="searchData" placeholder="Enter something..." />
    </div>
    <i-table :columns="columns1" :data="showDataFilter"/>
  </div>
</template>

<script>

/* const validateAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("Age cannot be empty"));
  }

  let copyValue = parseInt(value);

  setTimeout(() => {
    if (!Number.isInteger(copyValue)) {
      callback(new Error("Please enter a numeric value"));
    } else {
      if (copyValue < 1 || copyValue > 100) {
        callback(new Error("Must be between 1 - 100 years of age"));
      } else {
        callback();
      }
    }
  }, 500);
}; */

export default {
  name: "Table",

  data() {
    return {
      keyword: "",
      temp: "",
      modal1: false,
      modal2: false,
      newUser: {
        name: "uidsbafjkdbfkjbsd",
        username: "dfsdsf",
        email: "dfsdsf",
        phone: "dfsdsf",
        website: "dfsdsf"
      },
      ruleInline: {
        name: [
          {
            required: true,
            message: "Please fill in the name",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The name length cannot be less than 6 bits",
            trigger: "blur"
          }
        ],
        username: [
          {
            required: true,
            message: "Please fill in the username",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The username length cannot be less than 6 bits",
            trigger: "blur"
          }
        ],
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
        /*         age: [
          {
            validator: validateAge,
            trigger: "blur"
          }
        ], */

        phone: [
          {
            required: true,
            message: "Please fill in the address.",
            trigger: "blur"
          },
          {
            type: "string",
            message: "The address length cannot be less than 6 bits",
            trigger: "blur"
          }
        ],
        website: [
          {
            required: true,
            message: "Please fill in the address.",
            trigger: "blur"
          },
          {
            type: "string",
            message: "The address length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      },
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "UserName",
          key: "username"
        },
        {
          title: "Email",
          key: "email"
        },
        {
          title: "Phone",
          key: "phone"
        },
        {
          title: "Website",
          key: "website"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      localStorage.setItem("selectItemToDelete", params.index);
                      this.modal2 = true;
                      //this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org"
        },
        {
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          phone: "010-692-6593 x09125",
          website: "anastasia.net"
        },
        {
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          phone: "1-463-123-4447",
          website: "ramiro.info"
        }
      ]
    };
  },
  computed: {
    showDataFilter() {
      if (this.temp == "") return this.data1;
      else
        return this.data1.filter(
          a =>
            a.name.includes(this.temp.toLowerCase()) |
            a.name.includes(this.temp.toUpperCase())
        );
    }
  },
  methods: {
    ok() {
      this.$refs.formItem.validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.data1.push(this.newUser);
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    searchData() {
      this.temp = this.keyword;
    },
    deleteItem() {
      var idItem=localStorage.getItem("selectItemToDelete");
      this.data1.splice(idItem, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

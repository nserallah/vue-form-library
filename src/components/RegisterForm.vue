<template>
  <div class="form-register">
    <h3 class="text-center kufi-bold">فورم التسجيل</h3>
    <div class="container">
      <ul class="nav nav-tabs kufi-regular" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            <i class="far fa-user-circle"></i>

            البيانات الشخصية
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >بيانات الاتصال</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >البيانات المالية</a>
        </li>
      </ul>
      <div class="tab-content kufi-regular" id="myTabContent">
        <div
          class="tab-pane fade show active mt-3"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <ValidationObserver ref="form">
            <form @submit.prevent="onSubmit">
              <div class="form-group name">
                <div class="row-form mb-2" v-for="(name, i) in names" :key="i">
                  <div class="row">
                    <div class="col-1">
                      <label class="mt-2">الاسم</label>
                    </div>
                    <div class="col-6">
                      <!-- <input class="form-control" type="text" value name="name" v-model="name.nameField" /> -->

                      <validation-provider rules="required|alpha_spaces" v-slot="{ errors }">
                        <input
                          @input="onChang()"
                          class="form-control"
                          v-model="name.nameField"
                           
                          :name="'name' + i "   
                          type="text"
                        />
                        <span class="errors">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                    <div class="col-3">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <select
                          name="language"
                          @click="onChang()"
                          v-model="name.selectLang"
                          class="browser-default custom-select"
                        >
                          <option selected disabled>اللغة</option>
                          <option value="en">الانجليزية</option>
                          <option value="ar">العربية</option>
                        </select>
                        <span class="errors">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-2">
                      <span v-if="names.length > 1" class="icon-span" @click="deleteRow(i, name)">
                        <i class="fas fa-minus"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <span class="icon-span" @click="addNewRow()">
                  <i class="fas fa-plus"></i>
                </span>
              </div>

              <div class="form-group name">
                <div class="row-form mb-2">
                  <div class="row">
                    <div class="col-2">
                      <label class="mt-2">نوع المجموعة</label>
                    </div>
                    <div class="col-10">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <select
                          name="group-type"
                          @click="onChang()"
                          v-model="groupType"
                          class="browser-default custom-select"
                        >
                          <option selected disabled>نوع المجموعة</option>
                          <option value="1">مجموعة فردية</option>
                          <option value="2">مجموعة تعاونية</option>
                        </select>
                        <span class="errors">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group name">
                <div class="row-form mb-2">
                  <div class="row">
                    <div class="col-2">
                      <label class="mt-2">الكود</label>
                    </div>
                    <div class="col-10">
                      <validation-provider rules="required" v-slot="{ errors }">
                        <input
                          @input="onChang()"
                          class="form-control"
                          v-model="code"
                          name="code"
                          type="text"
                          placeholder="أدخل الكود"
                        />
                        <span class="errors">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group name">
                <div class="row-form mb-2">
                  <div class="row">
                    <div class="col-2">
                      <label class="mt-2">الجنسية</label>
                    </div>
                    <div class="col-10">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <select
                          name="nationality"
                          @click="onChang()"
                          v-model="nationality"
                          class="browser-default custom-select"
                        >
                          <option selected disabled>الجنسية</option>
                          <option value="palestinian">فلسطيني</option>
                          <option value="Egyptioan">مصري</option>
                        </select>
                        <span class="errors">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group name">
                <div class="row-form mb-2">
                  <div class="row">
                    <div class="col-2">
                      <label class="mt-2">الرقم الضريبي</label>
                    </div>
                    <div class="col-10">
                      <validation-provider rules="required|numeric" v-slot="{ errors }">
                        <input
                          @input="onChang()"
                          class="form-control"
                          v-model="taxNumber"
                          name="taxNumber"
                          type="text"
                          placeholder="أدخل الرقم"
                        />
                        <span class="errors">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group name">
                <div class="row-form mb-2">
                  <div class="row">
                    <div class="col-2">
                      <label class="mt-2">مندوب المبيعات</label>
                    </div>
                    <div class="col-10">
                      <validation-provider rules="required|alpha_spaces" v-slot="{ errors }">
                        <input
                          @input="onChang()"
                          class="form-control"
                          v-model="salesPerson"
                          name="salesPerson"
                          type="text"
                          placeholder="أدخل مندوب المبيعات"
                        />
                        <span class="errors">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group name">
                <div class="row-form mb-2">
                  <div class="row">
                    <div class="col-2">
                      <label class="mt-2">العملة الافتراضية</label>
                    </div>
                    <div class="col-10">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <select
                          name="virtualCurrency"
                          @click="onChang()"
                          v-model="virtualCurrency"
                          class="browser-default custom-select"
                        >
                          <option selected disabled>العملة الافتراضية</option>
                          <option value="dinar">الدينار</option>
                          <option value="dollar">الدولار</option>
                        </select>
                        <span class="errors">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group name">
                <div class="row-form mb-2">
                  <div class="row">
                    <div class="col-2">
                      <label class="mt-2">الجنس</label>
                    </div>
                    <div class="col-10">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <select
                          name="sex"
                          @click="onChang()"
                          v-model="gender"
                          class="browser-default custom-select"
                        >
                          <option selected disabled>الجنس</option>
                          <option value="male">ذكر</option>
                          <option value="female">أنثى</option>
                        </select>
                        <span class="errors">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group name">
                <div class="row-form mb-2">
                  <div class="row">
                    <div class="col-2">
                      <label class="mt-2">تاريخ البداية</label>
                    </div>
                    <div class="col-10">
                      <v-date-picker v-model="myStartDate"></v-date-picker>
                    </div>
                  </div>
                </div>
              </div>

              <input @click="toastedMsg" class="btn btn-primary" type="reset" value="اعادة تعيين" />
              <input class="btn btn-primary mr-3" type="submit" value="إرسال" />
            </form>
          </ValidationObserver>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
      </div>
    </div>
  </div>
</template>

<script>
//https://www.npmjs.com/package/vue-toasted/v/1.1.24
//https://www.npmjs.com/package/v-calendar/v/1.0.0-beta.14
//http://s4l1h.github.io/vue-toastr/started.html#create-toast
// https://logaretm.github.io/vee-validate/guide/forms.html#programmatic-access-with-refs
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required, alpha_spaces, numeric } from "vee-validate/dist/rules";
export default {
  name: "RegisterForm",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      names: [
        {
          selectLang: "",
          nameField: ""
        }
      ],
      groupType: "",
      code: "",
      nationality: "",
      taxNumber: null,
      salesPerson: "",
      virtualCurrency: "",
      gender: "",
      myStartDate: null
    };
  },
  methods: {
    addNewRow() {
      
      this.names.push({
        selectLang: "",
        nameField: ""
      });
    },
    deleteRow(i) {
      if (i > 0) {
        this.names.splice(i, 1);
      }
    },
    onChang() {
      extend("required", {
        ...required,
        message: "* هذا الحقل مطلوب"
      });

      extend("alpha_spaces", {
        ...alpha_spaces,
        message: "* هذا الحقل لا يقبل غير الحروف"
      });

      extend("numeric", {
        ...numeric,
        message: "* يرجى إدخال الارقام فقط"
      });
    },
    toastedMsg() {
      // you can call like this in your component
      this.$toasted.show("تمت اعادة التعيين", {
        theme: "bubble",
        position: "top-right",
        duration: 5000
      });

    },
    onSubmit() {
      this.onChang();
      this.$refs.form
        .validate()
        .then(success => {
          if (!success) {
            return;
          }
          
          this.$toastr.Add({
            name: "UniqueToastName", // this is give you ability to use removeByName method
            title: "رسالة", // Toast Title
            msg: "لقد تمت عملية التسجيل بنجاح", // Toast Message
            clickClose: true, // Click Close Disable
            timeout: 5000, // Remember defaultTimeout is 5 sec.(5000) in this case the toast won't close automatically
            //progressBarValue: 50, // Manually update progress bar value later; null (not 0) is default
            position: "toast-top-full-width", // Toast Position.
            type: "error", // Toast type,
            preventDuplicates: true, //Default is false,
            style: { backgroundColor: "blue", width: "250px", marginTop:"100px"}
          });

          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.form.reset();
          });
        })
        .then(
          (this.code = this.taxNumber = this.salesPerson = this.myStartDate = ""),
          this.names.forEach(na => {
            na.nameField = "";
          })
        );   
    }
  }
};
</script>


<style>
html,
body {
  direction: rtl;
}
form .name span.icon-span {
  border: 1px solid #333;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  text-align: center;
  display: block;
  margin: auto;
  cursor: pointer;
}

form .name .icon-span:hover {
  background: #6167e0;
  color: #fff;
}
form .name span i {
  line-height: 32px;
}

form .errors {
  color: red;
  font-size: 12px;
}
</style>

<template>
  <div class="">
    <PreLoader v-if="isLoading" />

    <div class="row mb-4">
      <table class="my-table">
        <thead>
          <tr>
            <th>#</th>
            <th v-if="showInReportStatus">{{ $t("general.show") }}</th>
            <th>{{ $t("delete") }}</th>
            <th class="cell-lg">
              {{ $t("PropertyTypes.listItems.name") }}
            </th>
            <th class="cell-lg">
              {{ $t("PropertyTypes.listItems.defaultValue") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-if="propertyDetailsData.length == 0">
            <tr>
              <th :colspan="showInReportStatus ? 5 : 4">
                {{ $t("PropertyTypes.listItems.noItems") }}
              </th>
            </tr>
          </template>
          <template v-else>
            <tr v-for="(item, index) in propertyDetailsData" :key="index">
              <td>{{ index + 1 }}</td>
              <td v-if="showInReportStatus">
                <CustomCheckbox
                  :value="item.showInReportStatus"
                  v-on:changeValue="item.showInReportStatus = $event"
                  :centerStatus="true"
                  :withOutTitle="true"
                />
              </td>
              <td>
                <button
                  :title="$t('delete')"
                  @click.prevent="removeSlice(index)"
                >
                  <img src="@/assets/images/trash.svg" />
                </button>
              </td>

              <td>
                <CustomInput
                  :id="`${id}-table-[${index}][propertyNameEn]`"
                  :isDisabled="true"
                  :value="
                    item.propertyNameEn
                      ? item.propertyNameEn
                      : item.propertyNameAr
                  "
                  v-on:changeValue="item.propertyNameEn = $event"
                  :withOutDesign="true"
                />
              </td>

              <template
                v-if="item.propertyFieldTypeToken == PROPERTY_FIELD_TYPES.Text"
              >
                <td>
                  <CustomInput
                    :id="`${id}-table-[${index}][propertyFieldDefaultValueEn]`"
                    :value="
                      item.propertyFieldDefaultValueEn ||
                      item.propertyFieldDefaultValueAr
                    "
                    v-on:changeValue="
                      item.propertyFieldDefaultValueEn = $event;
                      item.propertyFieldDefaultValueAr = $event;
                    "
                    :withOutDesign="true"
                  />
                </td>
              </template>
              <template
                v-else-if="
                  item.propertyFieldTypeToken ==
                  PROPERTY_FIELD_TYPES.DropDownList
                "
              >
                <td>
                  <div class="row">
                    <CustomSelectBox
                      v-show="showParent"
                      :className="'col-md-6'"
                      :id="`${id}-table-[${index}][dropDownListToken]`"
                      :value="item.dropDownListToken"
                      :options="dropDownListTokenOptions"
                      v-on:changeValue="
                        item.dropDownListToken = $event;
                        item.propertyFieldDefaultValueEn = $event;
                        item.propertyFieldDefaultValueAr = $event;
                        dropDownListTokenChanged($event, index);
                      "
                      :title="$t('DropDownLists.select')"
                      :imgName="'DropDownLists.svg'"
                      :openDown="true"
                    />
                    <CustomSelectBox
                      :key="keySelect"
                      :className="'col-md-12'"
                      :id="`${id}-table-[${index}][propertyFieldDefaultValueToken]`"
                      :value="item.propertyFieldDefaultValueToken"
                      :options="item.defaultValueOptions"
                      v-on:changeValue="
                        item.propertyFieldDefaultValueToken = $event
                      "
                      :title="$t('PropertyTypes.listItems.defaultValue')"
                      :imgName="'DropDownLists.svg'"
                      :openDown="true"
                    />
                  </div>
                </td>
              </template>
              <template v-else>
                <td>
                  <CustomInput
                    v-if="
                      item.propertyFieldTypeToken ==
                        PROPERTY_FIELD_TYPES.Email ||
                      item.propertyFieldTypeToken == PROPERTY_FIELD_TYPES.Link
                    "
                    :id="`${id}-table-[${index}][propertyFieldDefaultValueEn]`"
                    :value="
                      item.propertyFieldDefaultValueEn ||
                      item.propertyFieldDefaultValueAr
                    "
                    v-on:changeValue="
                      item.propertyFieldDefaultValueAr = $event;
                      item.propertyFieldDefaultValueEn = $event;
                    "
                    :withOutDesign="true"
                  />
                  <CustomInputFloat
                    v-else-if="
                      item.propertyFieldTypeToken ==
                        PROPERTY_FIELD_TYPES.Number ||
                      item.propertyFieldTypeToken ==
                        PROPERTY_FIELD_TYPES.Decimal ||
                      item.propertyFieldTypeToken ==
                        PROPERTY_FIELD_TYPES.Percentage
                    "
                    :id="`${id}-table-[${index}][propertyFieldDefaultValueAr]`"
                    :value="
                      item.propertyFieldDefaultValueEn ||
                      item.propertyFieldDefaultValueAr
                    "
                    v-on:changeValue="
                      item.propertyFieldDefaultValueAr = $event;
                      item.propertyFieldDefaultValueEn = $event;
                    "
                    :withOutDesign="true"
                  />
                  <CustomInputInt
                    v-else-if="
                      item.propertyFieldTypeToken ==
                      PROPERTY_FIELD_TYPES.Integer
                    "
                    :id="`${id}-table-[${index}][propertyFieldDefaultValueAr]`"
                    :value="
                      item.propertyFieldDefaultValueEn ||
                      item.propertyFieldDefaultValueAr
                    "
                    v-on:changeValue="
                      item.propertyFieldDefaultValueAr = $event;
                      item.propertyFieldDefaultValueEn = $event;
                    "
                    :title="$t('PropertyTypes.listItems.defaultValue')"
                    :imgName="'PropertyTypes.svg'"
                    :withOutDesign="true"
                  />

                  <DateTimePicker
                    v-else-if="
                      item.propertyFieldTypeToken ==
                      PROPERTY_FIELD_TYPES.DateTime
                    "
                    :id="`${id}-table-[${index}][propertyFieldDefaultValueAr]`"
                    type="dateTime"
                    :value="
                      item.propertyFieldDefaultValueEn ||
                      item.propertyFieldDefaultValueAr
                    "
                    :title="$t('PropertyTypes.listItems.defaultValue')"
                    v-on:changeValue="
                      item.propertyFieldDefaultValueAr = $event.dateTime;
                      item.propertyFieldDefaultValueEn = $event.dateTime;
                    "
                    :language="language"
                    :withOutDesign="true"
                  />
                  <DateTimePicker
                    v-else-if="
                      item.propertyFieldTypeToken == PROPERTY_FIELD_TYPES.Date
                    "
                    :id="`${id}-table-[${index}][propertyFieldDefaultValueAr]`"
                    type="date"
                    :value="
                      item.propertyFieldDefaultValueEn ||
                      item.propertyFieldDefaultValueAr
                    "
                    :title="$t('PropertyTypes.listItems.defaultValue')"
                    v-on:changeValue="
                      item.propertyFieldDefaultValueAr = $event.date;
                      item.propertyFieldDefaultValueEn = $event.date;
                    "
                    :language="language"
                    :imgName="'date.svg'"
                    :withOutDesign="true"
                  />
                  <DateTimePicker
                    v-else-if="
                      item.propertyFieldTypeToken == PROPERTY_FIELD_TYPES.Time
                    "
                    :id="`${id}-table-[${index}][propertyFieldDefaultValueAr]`"
                    type="time"
                    :value="item.propertyDateTime"
                    :title="$t('PropertyTypes.listItems.defaultValue')"
                    v-on:changeValue="
                      item.propertyDateTime = $event.dateTime;
                      item.propertyFieldDefaultValueAr = $event.timeCustomized;
                      item.propertyFieldDefaultValueEn = $event.timeCustomized;
                    "
                    :language="language"
                    :imgName="'time.svg'"
                    :withOutDesign="true"
                  />

                  <CustomCheckbox
                    v-else-if="
                      item.propertyFieldTypeToken ==
                      PROPERTY_FIELD_TYPES.Logical
                    "
                    :value="
                      item.propertyFieldDefaultValueEn ||
                      item.propertyFieldDefaultValueAr
                    "
                    v-on:changeValue="
                      item.propertyFieldDefaultValueAr = `${$event}`;
                      item.propertyFieldDefaultValueEn = `${$event}`;
                    "
                    :centerStatus="true"
                    :withOutTitle="true"
                  />

                  <span v-else>-</span>
                </td>
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PreLoader from "./../../../../components/general/PreLoader.vue";
import CustomInput from "./../../../../components/general/CustomInput.vue";
import CustomInputFloat from "./../../../../components/general/CustomInputFloat.vue";
import CustomInputInt from "./../../../../components/general/CustomInputInt.vue";
import DateTimePicker from "./../../../../components/general/DateTimePicker.vue";
import CustomSelectBox from "./../../../../components/general/CustomSelectBox.vue";
import CustomCheckbox from "./../../../../components/general/CustomCheckbox.vue";
import PropertyDetailsData from "./../../../../models/products/propertyTypes/PropertyDetailsData";
import apiDropDownList from "./../../../../api/products/dropDownLists";
import { PROPERTY_FIELD_TYPES } from "./../../../../utils/constantLists";
import { getLanguage } from "./../../../../utils/functions";
import { STATUS } from "./../../../../utils/constants";
import { getDialogOfPropertyFieldTypes } from "./../../../../utils/dialogsOfConstantsLists";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    CustomInput,
    CustomInputFloat,
    CustomInputInt,
    DateTimePicker,
    CustomSelectBox,
    CustomCheckbox,
  },
  data() {
    return {
      language: getLanguage(),
      propertyFieldTypeTokenOptions: getDialogOfPropertyFieldTypes(),
      PROPERTY_FIELD_TYPES,
      showParent: false,
      keySelect: "",
    };
  },
  props: {
    propertyDetailsData: {
      type: Array,
      default: () => [],
    },
    dropDownListTokenOptions: {
      type: Array,
      default: () => [],
    },
    idForm: {
      type: String,
      default: "id",
    },
    id: {
      type: String,
      default: "id",
    },
    showInReportStatus: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    // async dropDownListTokenOptions() {
    //   if (this.idForm == "update") {
    //     console.log("dropDownListTokenOptions");
    //     await this.setDefaultValueOptions();
    //   }
    // },
  },
  methods: {
    addSlice() {
      this.propertyDetailsData.push(new PropertyDetailsData());
    },
    removeSlice(index) {
      this.propertyDetailsData.splice(index, 1);
    },

    async setDefaultValueOptions() {
      this.propertyDetailsData.map((element, index) => {
        this.dropDownListTokenChanged(element.dropDownListToken, index);
      });
    },

    async dropDownListTokenChanged(token, index) {
      this.isLoading = true;
      this.propertyDetailsData[index].defaultValueOptions = [];
      if (token) {
        try {
          let filter = { token: token };
          const response = await apiDropDownList.getDetails(filter);
          if (
            response.data.status == STATUS.SUCCESS &&
            response.data.dropDownList &&
            response.data.dropDownList.dropDownListItemsData &&
            response.data.dropDownList.dropDownListItemsData.length > 0
          ) {
            this.propertyDetailsData[index].defaultValueOptions =
              response.data.dropDownList.dropDownListItemsData.map(
                (element) => {
                  return {
                    value: element.dropDownListItemToken,
                    text: element.dropDownListItemNameCurrent,
                  };
                }
              );
          } else if (response.data.status == STATUS.INVALID_TOKEN) {
            this.$store.dispatch("logoutUser", response.data.msg);
          } else {
            this.propertyDetailsData[index].defaultValueOptions.push({
              value: "",
              text: response.data.msg,
            });
          }
        } catch (e) {
          this.propertyDetailsData[index].defaultValueOptions.push({
            value: "",
            text: this.$t("errorCatch"),
          });
        }
      }
      this.keySelect = new Date();
      this.isLoading = false;
    },
  },
  async created() {
    await this.setDefaultValueOptions();
    // if (this.idForm == "update" || this.idForm == "duplicate") {
    //   await this.setDefaultValueOptions();
    // }
  },
};
</script>

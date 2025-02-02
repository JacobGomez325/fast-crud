import {
  TextAreaCI,
  CI,
  UiInterface,
  DialogCI,
  TableColumnCI,
  Icons,
  IconCI,
  TableCI,
  SelectCI,
  MessageCI,
  NotificationCI,
  MessageBoxCI,
  InputCI,
  OptionCI,
  FormWrapperCI,
  FormItemCI,
  DrawerCI,
  CheckboxCI,
  RadioCI,
  RadioGroupCI,
  TagCI,
  CheckboxGroupCI,
  CascaderCI,
  SwitchCI,
  InputPasswordCI,
  InputGroupCI,
  DatePickerCI,
  TimePickerCI,
  DropdownCI,
  DropdownMenuCI,
  DropdownItemCI,
  ImageGroupCI,
  ImageCI,
  ProgressCI,
  LoadingCI,
  UploadCI,
  TreeSelectCI,
  TabsCI,
  TabPaneCI,
  CollapseCI,
  CollapseItemCI,
  ButtonCI,
  PaginationCI,
  DividerCI,
  FormCI,
  PopoverCI,
  TooltipCI,
  useUiRender,
  InputNumberCI,
  BadgeCI
} from "@fast-crud/ui-interface";
// @ts-ignore
import _ from "lodash-es";
import { ElDialog } from "element-plus";

export type ElementUiProvider = {
  Notification: any;
  Message: any;
  MessageBox: any;
};

const { buildBinding, creator } = useUiRender();
export class Element implements UiInterface {
  constructor(target?: ElementUiProvider) {
    if (target) {
      this.notification.instance = target.Notification;
      this.message.instance = target.Message;
      this.messageBox.instance = target.MessageBox;
    }
  }

  type = "element";
  modelValue = "modelValue";

  switch: SwitchCI = creator({
    activeColor: "active-color",
    activeText: "active-text",
    activeValue: "active-value",
    inactiveColor: "inactive-color",
    inactiveText: "inactive-text",
    inactiveValue: "inactive-value",
    modelValue: "modelValue",
    name: "el-switch"
  });

  formWrapper: FormWrapperCI = creator({
    visible: "modelValue",
    customClass: (is: string) => {
      if (is === "el-dialog") {
        return "class";
      } else {
        return "customClass";
      }
    },
    titleSlotName: "header",
    buildOnClosedBind(is: string, onClosed: Function) {
      return { onClosed };
    },
    buildWidthBind(is, width) {
      return { width: width };
    },
    buildInitBind(is) {
      return {};
    },
    buildInnerBind() {
      return {};
    },
    name: "fs-form-wrapper"
  });

  messageBox: MessageBoxCI = creator({
    name: "el-message-box",
    instance: undefined,
    open: async (context) => {
      return this.messageBox.instance(context);
    },
    confirm: async (context) => {
      return this.messageBox.instance(context);
    }
  });

  message: MessageCI = creator({
    instance: undefined,
    name: "el-message",
    open: (context) => {
      this.message.instance.open(context);
    },
    success: (msg) => {
      this.message.instance.success(msg);
    },
    error: (msg) => {
      this.message.instance.error(msg);
    },
    warn: (msg) => {
      this.message.instance.warning(msg);
    },
    info: (msg) => {
      this.message.instance(msg);
    }
  });

  notification: NotificationCI = creator({
    instance: undefined,
    name: "el-notification",
    open: (context) => {
      this.notification.instance.open(context);
    },
    success: (msg) => {
      this.notification.instance.success(msg);
    },
    error: (msg) => {
      this.notification.instance.error(msg);
    },
    warn: (msg) => {
      this.notification.instance.warn(msg);
    },
    info: (msg) => {
      this.notification.instance.success(msg);
    }
  });

  icon: IconCI = creator({
    name: "",
    isComponent: false
  });

  icons: Icons = {
    add: "plus",
    columnsFilter: "set-up",
    compact: "rank",
    edit: "edit",
    remove: "delete",
    search: "search",
    refresh: "refresh",
    export: "upload",
    check: "check",
    sort: "sort",
    left: "arrow-left",
    right: "arrow-right",
    close: "close",
    arrowLeft: "left",
    arrowRight: "right",
    more: "more",
    plus: "plus",
    zoomIn: "zoom-in",
    zoomOut: "zoom-out",
    refreshLeft: "refresh-left",
    refreshRight: "refresh-right",
    upload: "upload",
    fullScreen: "full-screen",
    unFullScreen: "full-screen",
    question: "question-filled",
    caretUp: "CaretTop",
    caretDown: "CaretBottom"
  };

  dialog: DialogCI = creator({
    name: "el-dialog",
    visible: "modelValue",
    customClass: "customClass",
    buildOnClosedBind(onClosed) {
      return { onClosed };
    },
    footer() {
      return {};
    },
    open(opts) {
      ElDialog.open(opts);
    }
  });

  buttonGroup: CI = creator({
    name: "el-button-group"
  });

  col: CI = creator({
    name: "el-col"
  });

  row: CI = creator({
    name: "el-row"
  });

  card: CI = creator({
    name: "el-card"
  });

  checkboxGroup: CheckboxGroupCI = creator({
    name: "el-checkbox-group",
    modelValue: "modelValue"
  });
  checkbox: CheckboxCI = creator({
    name: "el-checkbox",
    resolveEvent(e: any) {
      return e;
    },
    modelValue: "modelValue",
    value: "label",
    onChange(callback: (e: any) => void) {
      return {
        "onUpdate:modelValue": callback
      };
    }
  });

  drawer: DrawerCI = creator({
    name: "el-drawer",
    visible: "modelValue",
    customClass: "class",
    width: "size"
  });

  collapseTransition: CI = creator({
    name: "el-collapse-transition"
  });

  option: OptionCI = creator({
    name: "el-option",
    value: "value",
    label: "label"
  });

  select: SelectCI = creator({
    name: "el-select",
    modelValue: "modelValue",
    clearable: "clearable"
  });

  treeSelect: TreeSelectCI = creator({
    name: "el-tree-select",
    modelValue: "modelValue",
    clearable: "select.clearable",
    options: "data",
    value: "tree.value",
    label: "tree.label",
    children: "tree.children"
  });

  radio: RadioCI = creator({
    name: "el-radio",
    value: "label"
  });

  radioGroup: RadioGroupCI = creator({
    name: "el-radio-group",
    modelValue: "modelValue"
  });

  cascader: CascaderCI = creator({
    name: "el-cascader",
    modelValue: "modelValue",
    clearable: "clearable",
    fieldNames(namesMap: any) {
      return {
        props: namesMap
      };
    }
  });

  form: FormCI = creator({
    name: "el-form",
    inlineLayout: {
      layout: "inline",
      inline: true
    },
    // resetWrap: (formRef, { form, initialForm }) => {
    //   // formRef.resetFields();
    //   const entries = _.entries(form);
    //   for (const entry of entries) {
    //     const initialValue = _.get(initialForm, entry[0]);
    //     if (initialValue == null) {
    //       _.unset(form, entry[0]);
    //     } else {
    //       _.set(form, entry[0], initialValue);
    //     }
    //   }
    // },
    validateWrap: async (formRef) => {
      return formRef.validate();
    },
    transformValidateErrors: (e: any) => {
      const errorFields = e.code || e.validation || {};
      const errors: any = {};
      if (errorFields && errorFields instanceof Array) {
        for (const errorField of errorFields) {
          const name = errorField.field;
          errors[name] = true;
        }
      }

      return errors;
    }
  });

  formItem: FormItemCI = creator({
    name: "el-form-item",
    prop: "prop",
    label: "label",
    rules: "rules"
  });

  button: ButtonCI = creator({
    name: "el-button",
    textType: { type: "text" },
    linkType: { type: "text" },
    circle: { circle: true },
    colors: (type) => {
      return { type };
    }
  });

  pagination: PaginationCI = creator({
    name: "el-pagination",
    currentPage: "currentPage",
    total: "total", //总条数
    pageCount: null,
    onChange({ setCurrentPage, setPageSize, doAfterChange }) {
      return {
        // element 页码改动回调
        onCurrentChange(event: any) {
          setCurrentPage(event);
          doAfterChange();
        },
        onSizeChange(event: any) {
          setPageSize(event);
          doAfterChange();
        }
      };
    }
  });

  tableColumn: TableColumnCI = creator({
    name: "el-table-column",
    label: "label",
    prop: "prop",
    row: "row",
    index: "$index"
  });

  tableColumnGroup: TableColumnCI = creator({
    name: "el-table-column",
    label: "label",
    prop: "prop",
    row: "row",
    index: "$index"
  });

  table: TableCI = creator({
    name: "el-table",
    data: "data",
    renderMode: "slot",
    defaultRowKey: "id",
    fixedHeaderNeedComputeBodyHeight: false,
    buildMaxHeight: (maxHeight) => {
      return { maxHeight };
    },
    hasMaxHeight: (options) => {
      return options?.maxHeight != null;
    },
    headerDomSelector: "",
    vLoading: "loading",
    rebuildRenderScope: (scope) => {
      return scope;
    },
    onChange({ onSortChange, onFilterChange }) {
      return {
        onSortChange: ({ column, prop, order }: any) => {
          if (!onSortChange) {
            return;
          }
          onSortChange({
            isServerSort: prop && column.sortable === "custom",
            prop,
            order,
            asc: order === "ascending"
          });
        },
        onFilterChange
      };
    }
  });

  textArea: TextAreaCI = creator({
    name: "el-input",
    type: "textarea",
    modelValue: "modelValue",
    clearable: "clearable"
  });

  tag: TagCI = creator({
    name: "el-tag",
    type: "type",
    colors: ["primary", "success", "warning", "danger"]
  });

  inputGroup: InputGroupCI = creator({
    name: "el-input-group"
  });
  input: InputCI = creator({
    name: "el-input",
    clearable: "clearable",
    modelValue: "modelValue"
  });
  inputPassword: InputPasswordCI = creator({
    name: "el-input",
    clearable: "clearable",
    modelValue: "modelValue",
    passwordType: { showPassword: true }
  });
  number: InputNumberCI = creator({
    name: "el-input-number",
    modelValue: "modelValue",
    builder(opts) {
      return buildBinding(this, opts, {});
    }
  });
  datePicker: DatePickerCI = creator({
    name: "el-date-picker",
    modelValue: "modelValue",
    buildDateType(type) {
      return { name: "el-date-picker", type };
    }
  });
  timePicker: TimePickerCI = creator({
    name: "el-time-picker",
    modelValue: "modelValue"
  });
  dropdown: DropdownCI = creator({
    name: "el-dropdown",
    command(callback) {
      return {
        onCommand($event: any) {
          callback($event);
        }
      };
    },
    slotName: "dropdown",
    renderMode: "slot"
  });
  dropdownMenu: DropdownMenuCI = creator({
    name: "el-dropdown-menu",
    command: () => {
      return {};
    }
  });
  dropdownItem: DropdownItemCI = creator({
    name: "el-dropdown-item",
    command: "command"
  });

  imageGroup: ImageGroupCI = creator({
    name: "fs-box"
  });
  image: ImageCI = creator({
    name: "el-image",
    buildPreviewBind: ({ url, urls, previewUrl, previewUrls, index }) => {
      return { "preview-src-list": previewUrls, "initial-index": index };
    }
  });
  progress: ProgressCI = creator({
    name: "el-progress"
  });
  loading: LoadingCI = creator({
    name: "v-loading",
    type: "directive"
  });
  upload: UploadCI = creator({
    id: "uid",
    name: "el-upload",
    type: "",
    typeImageCard: "picture-card",
    typeImage: "picture",
    getStatusFromEvent(event) {
      return event?.status;
    },
    getFileListFromEvent(response: any, file: any, fileList: any) {
      return fileList;
    },
    status: {
      success: "success",
      uploading: "uploading"
    },
    isSuccess(fileItem) {
      return fileItem.status === "success";
    },
    limitAdd: 1
  });
  tabs: TabsCI = creator({
    name: "el-tabs",
    modelValue: "modelValue"
  });
  tabPane: TabPaneCI = creator({
    name: "el-tab-pane",
    key: "name",
    tab: "label"
  });
  collapse: CollapseCI = creator({
    name: "el-collapse",
    modelValue: "modelValue",
    keyName: "name"
  });
  collapseItem: CollapseItemCI = creator({
    name: "el-collapse-item",
    key: "name",
    titleSlotName: "title",
    /**
     * element collapse只支持title插槽
     */
    extraSlotName: "not_support_extra",
    builder(opts) {
      return buildBinding(this, opts, {
        slots: {
          [this.titleSlotName]() {
            return (
              <div class={"fsel-collapse-item-title fsel-flex-row space-between"}>
                <span class={"title-text"}>{opts.titleSlot()} </span>
                <span class={"title-extra"}>{opts.extraSlot()}</span>
              </div>
            );
          }
        }
      });
    }
  });

  badge: BadgeCI = creator({
    name: "el-badge",
    value: "value",
    builder(opts) {
      return buildBinding(this, opts, {
        props: {
          [this.value]: opts.value
        }
      });
    }
  });
  tooltip: TooltipCI = creator({
    name: "el-tooltip",
    content: "content",
    trigger: "default"
  });
  divider: DividerCI = creator({
    name: "el-divider"
  });
  popover: PopoverCI = creator({
    name: "el-popover",
    contentSlotName: "default",
    triggerSlotName: "reference",
    visible: "visible"
  });
}

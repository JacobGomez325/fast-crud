import { CI, DialogCI, TableColumnCI, TextAreaCI, UiInterface } from './ui-interface'
export class Antdv implements UiInterface {
  dialog: DialogCI={
    name: 'a-modal',
    visible: 'visible'
  };

  button: CI={
    name: 'a-button'
  };

  buttonGroup: CI={
    name: 'a-button-group'
  };

  card: CI={
    name: 'a-card'
  };

  checkbox: CI={
    name: 'a-checkbox'
  };

  col: CI={
    name: 'a-col'
  };

  collapseTransition: CI={
    name: 'div'
  };

  drawer: CI={
    name: 'a-drawer'
  };

  form: CI={
    name: 'a-drawer'
  };

  formItem: CI={
    name: 'a-form-item'
  };

  option: CI={
    name: 'a-formItem'
  };

  pagination: CI={
    name: 'a-pagination'
  };

  radio: CI={
    name: 'a-radio'
  };

  radioGroup: CI={
    name: 'a-radio-group'
  };

  row: CI={
    name: 'a-row'
  };

  select: CI={
    name: 'a-select'
  };

  table: CI={
    name: 'a-table'
  }

  tableColumn: TableColumnCI={
    name: 'a-table-column',
    label: 'title',
    prop: 'key'
  };

  textArea: TextAreaCI={ name: 'a-textarea', type: undefined };
  tag: CI = {
    name: 'a-tag'
  };

  input= {
    name: 'a-input'
  }
}
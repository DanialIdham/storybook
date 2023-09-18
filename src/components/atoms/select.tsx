import React, { useEffect, useState }  from 'react';
import {
    Select as AntdSelect,
    TreeSelect as AntdTreeSelect,
    Divider as AntdDivider,
    Form as AntdForm,
    Input as AntdInput,
  } from 'antd';
  import { SizeType } from 'antd/lib/config-provider/SizeContext';
  import { DataNode } from 'antd/lib/tree';
  import { createUseStyles } from 'react-jss';
  
  type ModeType = 'multiple' | 'tags';
  type StatusType = 'error' | 'warning';
  type SelectDropdownType = 'tree' | 'normal' | 'nested'

  export type NestedOptionsType = {
    options: Array<OptionsType>;
    label?: string;
  };
  
  export type OptionsType = {
    value: string | number | boolean;
    label?: string;
    title?: string;
    key: string;
    children?: OptionsType[];
  };
  
  export type SelectProps = {
    type : SelectDropdownType;
    defaultValue?: string;
    labe?: string;
    status?: StatusType;
    optionsMode?: ModeType;
    disabled?: boolean;
    size?: SizeType;
    value?: string | undefined;
    allowClear?: boolean;
    selectOptions?: NestedOptionsType[] | OptionsType[];
    children?: React.ReactNode;
    showSearch : boolean;

    oneOptionsMenuChange?: (
        options: NestedOptionsType[] | OptionsType[],
        value: string,
      ) => void;
    onChange?: (value: string, event: any) => void;
  };
  
  const useStyles = createUseStyles({
    selectContainer: {
      '& .ant-select': {
        width: '100%',
      },
      '& .ant-select-item-option-grouped': {
        padding: '5px 12px',
      },
    },
    dividerClass: {
      margin: '8px 0',
    },
    formContainer: {
      '& .ant-form-item': {
        padding: '5px 12px',
        margin: 0,
      },
      '& .ant-form-item-control-input-content > div': {
        padding: 0,
      },
    },
  });

  export const Select = (props: SelectProps): JSX.Element => {
    const {
        type,
        defaultValue,
        status,
        optionsMode,
        disabled,
        size,
        value,
        allowClear,
        selectOptions,
        children,
        showSearch,
        oneOptionsMenuChange,
        onChange,
    } = props;

    const classes = useStyles();

    const handleSelectChange = (value: string, option: any) => {
        if (onChange) {
            onChange(value, option);
        }
    };

    const renderOptions = () => {
        if (type === 'normal' && selectOptions) {
            return (selectOptions as OptionsType[]).map(option => (
                <AntdSelect.Option key={option.key} value={option.value}>
                    {option.label}
                </AntdSelect.Option>
            ));
        } else if (type === 'nested' && selectOptions) {
            return (selectOptions as NestedOptionsType[]).map(group => (
                <AntdSelect.OptGroup key={group.label} label={group.label}>
                    {group.options.map(option => (
                        <AntdSelect.Option key={option.key} value={option.value}>
                            {option.label}
                        </AntdSelect.Option>
                    ))}
                </AntdSelect.OptGroup>
            ));
        }
    };

    const renderTreeSelectOptions = () => {
        if (type === 'tree' && selectOptions) {
            return selectOptions as OptionsType[];
        }
        return [];
    };

    return (
        <div className={classes.selectContainer}>
            {type !== 'tree' ? (
                <AntdSelect
                    defaultValue={defaultValue}
                    mode={optionsMode}
                    disabled={disabled}
                    size={size}
                    value={value}
                    allowClear={allowClear}
                    showSearch={showSearch}
                    onChange={handleSelectChange}
                >
                    {renderOptions()}
                </AntdSelect>
            ) : (
                <AntdTreeSelect
                    treeData={renderTreeSelectOptions()}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    size={size}
                    value={value}
                    allowClear={allowClear}
                    showSearch={showSearch}
                    onChange={handleSelectChange}
                />
            )}
        </div>
    );
};

Select.Option = AntdSelect.Option;
  
export default Select;

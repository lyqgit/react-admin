import React from "react";
import { Button, Input, Select } from "antd";

const { Option } = Select

const createSubGroup = (item)=>{

  switch(item.subGroup){
    case 'input':
      return (<Input placeholder={item.placeholder} />)
    case 'select':
      return (
        <Select placeholder={item.placeholder}>
          {item.selectOptions.map((itemd,index)=>(
            <Option key={index} value={itemd.value}>{itemd.show}</Option>
          ))}
        </Select>
      )
    case 'submit':
      return (
        <Button type="primary" htmlType="submit">
          {item.name}
        </Button>
      )
    default :
      return (<Input placeholder={item.placeholder} />)
  }
}

export default createSubGroup
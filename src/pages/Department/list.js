import React,{ Component } from 'react'
import { Form,Select,Button } from 'antd'
import createSubGroup from '@/utils/subGroup'

const { Option } = Select

class DepartmentList extends Component {

  constructor(props){
    super(props)
    this.state = {
      form:[
        {
          label:'Note',
          labelCol:{ span: 5 },
          wrapperCol:{span: 12},
          name:'note',
          getFieldDecoratorOptions:{
            rules: [{ required: true, message: 'Please input your note!' }],
          },
          subGroup:'input',
          selectOptions:[],
          placeholder:'填空'
        },
        {
          label:'Gender',
          labelCol:{ span: 5 },
          wrapperCol:{span: 12},
          name:'gender',
          getFieldDecoratorOptions:{
            rules: [{ required: true, message: 'Please input your note!' }],
          },
          subGroup:'select',
          selectOptions:[
            {
              show:'male',
              value:'male'
            },
            {
              show:'female',
              value:'female'
            }
          ],
          placeholder:'选择'
        },
        {
          label:'',
          labelCol:{},
          wrapperCol:{ span: 12, offset: 5 },
          name:'提交',
          getFieldDecoratorOptions:{},
          subGroup:'submit',
          selectOptions:[],
          placeholder:''
        },
      ]
    }
  }

  // 提交表单
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.submit(values)
      }
    });
  };

  // 重置提交内容
  handleReset = () => {
    this.props.form.resetFields();
  };

  render(){
    const { getFieldDecorator } = this.props.form;
    console.log(this.state.form)
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.state.form && this.state.form.map((item,index)=>(
          <Form.Item key={index} label={item.label} labelCol={item.labelCol} wrapperCol={item.wrapperCol}>
            {getFieldDecorator(item.name, item.getFieldDecoratorOptions)(createSubGroup(item))}
          </Form.Item>
        ))}
      </Form>
    );
  }
}

export default Form.create()(DepartmentList)
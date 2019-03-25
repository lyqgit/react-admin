import React,{ Component } from 'react'
import { Button, Table, Form, Input, Select  } from 'antd'

const FormItem = Form.Item;
const { Option } = Select;

class UserList extends Component {

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  onPageChange=(page,pageSize)=>{
    this.setState({
      loading:true
    })
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },1000)
  }

  render(){

    const { getFieldDecorator } = this.props.form

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
        <div>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <div>
                <Form layout="inline" style={{margin:20}}>
                <FormItem label="姓名:">
                  {getFieldDecorator('username', {
                    initialValue:'测试',
                    rules: [{
                      message: 'The input is not valid E-mail!',
                    }, {
                      message: 'Please input your E-mail!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem label="职务:">
                  {getFieldDecorator('job', {
                    initialValue:'测试',
                    rules: [{
                      message: 'The input is not valid E-mail!',
                    }, {
                      message: 'Please input your E-mail!',
                    }],
                  })(
                    <Select style={{ width: 120 }}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>Disabled</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem label="batch:">
                  {getFieldDecorator('batch', {
                    rules: [{
                      message: 'The input is not valid E-mail!',
                    }, {
                      message: 'Please input your E-mail!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem label="OU:">
                  {getFieldDecorator('ou', {
                    initialValue:'测试',
                    rules: [              
                    {
                     message: 'The input is not valid E-mail!',
                    }, {
                      message: 'Please input your E-mail!',
                    }],
                  })(
                    <Select style={{ width: 120 }}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>Disabled</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  )}
                </FormItem>
              </Form>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
              <Button type="danger">重置</Button>
              <Button type="primary">查询</Button>
            </div>
          </div>
          <Table
            style={{padding:10}}
            loading={this.state.loading}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{pageSize:5,onChange:this.onPageChange}}
          />
        </div>
      )
  }
}

export default Form.create()(UserList)
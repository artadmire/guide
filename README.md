# Tips
通用的Tips函数，支持传递多个引导信息。

# 一般用法
## 直接使用

```javascript

const list = [
  {
    btnText: '下一步',
    node: <div>第一个引导页面</div>,
    onClick: (index: number) => {
      console.log(index)
    }
  },
  {
    btnText: '下一步',
    node: <div>第二个引导页面</div>,
    onClick: (index: number) => {
      console.log(index)
    }
  }
]
import Guide from 'guide'
class App extends React.PureComponent {

  ...
    componentDidMount() {
      Guide.show(list)
    }
  ...
 
}

export default App;
```

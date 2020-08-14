# taro-dom-align <a href="https://www.npmjs.com/package/taro-dom-align"><img src="https://badge.fury.io/js/taro-dom-align.svg" alt="NPM Version"></a> <img src="https://badgen.net/packagephobia/publish/taro-dom-align" alt="Size"> <img src="https://badgen.net/npm/dt/taro-dom-align" alt="Download">  <img src="https://badgen.net/github/license/john60676/taro-dom-align" alt="License">

在 [Taro](https://github.com/NervJS/taro) 中使用 [dom-align](https://github.com/yiminghe/dom-align)，部分代码的实现参考了 [dom-align](https://github.com/yiminghe/dom-align)。

## 安装

### Taro 2

```bash
# yarn
yarn add taro-dom-align

# npm
npm i taro-dom-align --save
```

## 使用

```ts
import useDomAlign from 'taro-dom-align'

// 与原版 dom-align 不同， 
// sourceStyle 绑定在 source 元素上
// doAlign 计算 source 的定位
// setSourceStyle 自定义 source 的样式
const alignConfig = {
  points: ['tl', 'br']
}
const [sourceStyle, doAlign, setSourceStyle] = useDomAlign('.source', '.target', alignConfig)
```

### alignConfig 参数详解

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>points</td>
          <td>String[2]</td>
          <td>移动 source 节点的点以与 target 节点的点对齐, 例如 ['tl','br'],
          将 source 节点的左上角 对齐 target 节点的右下角.
          point 的值可以为 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right)
      </td>
      </tr>
    </tbody>
</table>


## Demo
```tsx
import { View, Button } from '@tarojs/components';
import useDomAlign from 'taro-dom-align';

function Page (){
  const [sourceStyle, doAlign, setSourceStyle] = useDomAlign('.source', '.target', {
    points: ['tl', 'br'],
  });

  const handleClick = () => {
    if (sourceStyle.display === 'none') {
      doAlign();
    } else {
      setSourceStyle({
        display: 'none',
      });
    }
  };
  return (
    <View>
      <View className='target'>
        <Button onClick={handleClick}>
          target
        </Button>
      </View>
      <View className='source' style={sourceStyle}>
        source
      </View>
    </View>
  );
};
```

## TODO

 - [ ] 设置 source 的偏移值，与原版的 alignConfig offset 效果一致
 - [ ] 设置 target 的偏移值，与原版的 alignConfig -- targetOffset
 - [ ] 支持 taro3
 - [ ] 支持 taro1
 - [ ] 多端？


## 许可

MIT © John60676
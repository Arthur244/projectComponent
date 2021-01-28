# AntdUtil

Antd 组件相关的辅助工具

### 渲染树

```tsx
import React from 'react';
import { AntdUtil } from 'fb-project-component';

export default () => {
  return (
    <div>
      {AntdUtil.rendeTree(
        [
          {
            id: 1,
            name: '1',
            children: [
              {
                id: 11,
                name: '11',
              },
            ],
          },
          {
            id: 2,
            name: '2',
            children: [
              {
                id: 21,
                name: '21',
              },
            ],
          },
          {
            id: 3,
            name: '3',
          },
        ],
        {
          onSelect: value => {
            alert(`已选中${value.join()}`);
          },
        },
      )}
    </div>
  );
};
```

### 自定义渲染属性

```tsx
import React from 'react';
import { AntdUtil } from 'fb-project-component';

export default () => {
  return (
    <div>
      {AntdUtil.rendeTree(
        [
          {
            myID: 1,
            myName: '1',
            myChildren: [
              {
                myID: 11,
                myName: '11',
              },
            ],
          },
          {
            myID: 2,
            myName: '2',
            myChildren: [
              {
                myID: 21,
                myName: '21',
              },
            ],
          },
          {
            myID: 3,
            myName: '3',
          },
        ],
        null,
        'myID',
        item => {
          return (
            <span style={{ color: 'red' }}>{`我的名称是：${item.myName}`}</span>
          );
        },
        'myChildren',
      )}
    </div>
  );
};
```

<API src="../utils/AntdUtil.tsx"/>

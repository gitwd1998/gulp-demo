> 彩色日志

```
  console.log("\x1B[字背景颜色;文字颜色m%s\x1B[0m", 内容);

  \x1B[31m：是一个转义序列，它将被您的终端拦截并指示它切换到红色
  字体颜色：30～37
  字背景颜色：40～47
  %s：内容插入的位置 可以直接替换成内容
  控制选项：
    0m 关闭所有属性
    1m 设置高亮度
    4m 下划线
    5m 闪烁
    7m 反显
    8m 消隐
    30m — 37m 设置前景色
    40m — 47m 设置背景色
    nA 光标上移n行
    nB 光标下移n行
    nC 光标右移n行
    nD 光标左移n行
    y;xH设置光标位置
    2J 清屏
    K 清除从光标到行尾的内容
    s 保存光标位置
    u 恢复光标位置
    ?25l 隐藏光标
    ?25h 显示光标
```

